package database

import (
	"context"
	"errors"
	"log"
	"time"

	"backend/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	ErrCantFindProduct    = errors.New("cannot find the product")
	ErrCantDecodeProducts = errors.New("cannt find the product(s)")
	ErrUserIdIsNotValid   = errors.New("user is not valid")
	ErrCantUpdateUser     = errors.New("cannot add product to cart")
	ErrCantRemoveItem     = errors.New("cannot remove item from cart")
	ErrCantGetItem        = errors.New("cannot get item from cart ")
	ErrCantBuyCartItem    = errors.New("cannot update the purchase")
)

func AddProductToCart(ctx context.Context, productionCollection *mongo.Collection, userCollection *mongo.Collection, productId primitive.ObjectID, userId string) error {
	searchedFromDB, err := productionCollection.Find(ctx, bson.M{"_id": productId})
	if err != nil {
		log.Println(err)
		return ErrCantFindProduct
	}
	var productCart []models.Product
	err = searchedFromDB.All(ctx, &productCart)
	if err != nil {
		log.Println(err)
		return ErrCantDecodeProducts
	}

	id, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Println(err)
		return ErrUserIdIsNotValid
	}

	filter := bson.D{primitive.E{Key: "_id", Value: id}}
	update := bson.D{{Key: "$push", Value: bson.D{primitive.E{Key: "user_cart", Value: bson.D{{Key: "$each", Value: productCart}}}}}}
	_, err = userCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		return ErrCantUpdateUser
	}
	return nil
}

func RemoveCartItem(ctx context.Context, productionCollection *mongo.Collection, userCollection *mongo.Collection, productId primitive.ObjectID, userId string) error {
	id, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Println(err)
		return ErrUserIdIsNotValid
	}
	filter := bson.D{primitive.E{Key: "_id", Value: id}}
	update := bson.M{"$pull": bson.M{"user_cart": bson.M{"_id": productId}}}
	_, err = userCollection.UpdateMany(ctx, filter, update)
	if err != nil {
		return ErrCantRemoveItem
	}
	return nil

}

func BuyItemFromCart(ctx context.Context, userCollection *mongo.Collection, userId string, orderCollection *mongo.Collection) error {
	usertId, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Println(err)
		return ErrUserIdIsNotValid
	}

	var getCartItems models.User
	var orderCart models.Order
	orderCart.OrderID = primitive.NewObjectID().Hex()
	orderCart.CreatedAt = time.Now()
	orderCart.Cart = make([]models.Product, 0)
	orderCart.PaymentMethod = "COD"

	unwind := bson.D{{Key: "$unwind", Value: bson.D{{Key: "path", Value: "$user_cart"}}}}
	grouping := bson.D{{Key: "$group", Value: bson.D{
		{Key: "_id", Value: "$_id"},
		{Key: "total", Value: bson.D{{Key: "$sum", Value: "$user_cart.price"}}},
	}}}

	currentResults, err := userCollection.Aggregate(ctx, mongo.Pipeline{unwind, grouping})
	if err != nil {
		return err
	}
	defer currentResults.Close(ctx)

	var getUserCart []bson.M
	if err = currentResults.All(ctx, &getUserCart); err != nil {
		return err
	}

	var totalPrice float64
	for _, userItem := range getUserCart {
		if price, ok := userItem["total"].(float64); ok {
			totalPrice = price
		}
	}
	orderCart.Price = totalPrice

	// Lấy toàn bộ giỏ hàng hiện tại
	err = userCollection.FindOne(ctx, bson.D{{Key: "_id", Value: usertId}}).Decode(&getCartItems)
	if err != nil {
		log.Println(err)
		return err
	}
	orderCart.Cart = getCartItems.UserCart

	// Thêm vào đơn hàng của người dùng
	_, err = userCollection.UpdateOne(ctx,
		bson.D{{Key: "_id", Value: usertId}},
		bson.D{{Key: "$push", Value: bson.D{{Key: "orders", Value: orderCart}}}},
	)
	if err != nil {
		return err
	}

	// Thêm vào collection order
	_, err = orderCollection.InsertOne(ctx, orderCart)
	if err != nil {
		log.Println(err)
		return err
	}

	// Reset giỏ hàng
	userCartEmpty := make([]models.Product, 0)
	_, err = userCollection.UpdateOne(ctx,
		bson.D{{Key: "_id", Value: usertId}},
		bson.D{{Key: "$set", Value: bson.D{{Key: "user_cart", Value: userCartEmpty}}}},
	)
	if err != nil {
		return ErrCantBuyCartItem
	}

	return nil
}


func InstantBuyer(ctx context.Context, productCollection *mongo.Collection, userCollection *mongo.Collection, productId primitive.ObjectID, userId string) error {
	id, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Println(err)
		return ErrUserIdIsNotValid
	}

	var productDetails models.Product
	err = productCollection.FindOne(ctx, bson.D{{Key: "_id", Value: productId}}).Decode(&productDetails)
	if err != nil {
		log.Println(err)
		return err
	}

	var ordersDetail models.Order
	ordersDetail.OrderID = primitive.NewObjectID().Hex()         // ✅ sửa OrderId → OrderID
	ordersDetail.CreatedAt = time.Now()                          // ✅ sửa OrderedAt → CreatedAt
	ordersDetail.Cart = []models.Product{productDetails}         // ✅ sửa OrderCart → Cart
	ordersDetail.PaymentMethod = "COD"                           // ✅ sửa PaymentMethod.COD → "COD"
	ordersDetail.Price = float64(productDetails.Price)           // ✅ ép kiểu từ uint64 → float64 nếu cần

	// Update đơn hàng của user
	filter := bson.D{{Key: "_id", Value: id}}
	update := bson.D{{Key: "$push", Value: bson.D{{Key: "orders", Value: ordersDetail}}}}

	_, err = userCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		log.Println(err)
		return err
	}

	return nil
}
