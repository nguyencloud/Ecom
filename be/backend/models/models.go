package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id             primitive.ObjectID `json:"_id" bson:"_id"`
	FirstName      string             `json:"first_name" validate:"required,min=2,max=30"`
	LastName       string             `json:"last_name"  validate:"required,min=2,max=30"`
	Password       string             `json:"password"   validate:"required,min=6"`
	Phone          string             `json:"phone"      validate:"required"`
	Token          string             `json:"token"`
	RefreshToken   string             `josn:"refresh_token"`
	CreatedAt      time.Time          `json:"created_at"`
	UpdatedAt      time.Time          `json:"updated_at"`
	UserId         string             `json:"user_id"`
	UserCart       []Product          `json:"user_cart" bson:"user_cart"`
	AddressDetails []Address          `json:"addresses" bson:"addresses"`
	Orders         []Order            `json:"orders" bson:"orders"`
}

type Product struct {
	ProductId   primitive.ObjectID `bson:"_id"`
	ProductName string             `json:"product_name"`
	Price       uint64             `json:"price"`
	Rating      float32            `json:"rating"`
	Image       string             `json:"image"`
	Comments    []Comment          `json:"comments" bson:"comments"`
}

type Address struct {
	AddressId primitive.ObjectID `bson:"_id"`
	House     string             `json:"house" bson:"house"`
	Street    string             `json:"street" bson:"street"`
	Ward      string             `json:"ward" bson:"ward"`
	District  string             `json:"district" bson:"district"`
	City      string             `json:"city" bson:"city"`
}

type Order struct {
    OrderID       string      `json:"order_id" bson:"order_id"`
    Fullname      string      `json:"fullname" bson:"fullname"`
    Email         string      `json:"email" bson:"email"`
    Phone         string      `json:"phone" bson:"phone"`
    Address       string      `json:"address" bson:"address"`
    Cart          []Product   `json:"cart" bson:"cart"`
    PaymentMethod string      `json:"payment_method" bson:"payment_method"`
    Price         float64     `json:"price" bson:"price"`
    CreatedAt     time.Time   `json:"created_at" bson:"created_at"`
}



type Payment struct {
	Digital bool `json:"digital" bson:"digital"`
	COD     bool `json:"cod"     bson:"cod"`
}

type Comment struct {
	CommentId primitive.ObjectID `bson:"_id"`
	UserId    string             `json:"user_id" bson:"user_id"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	Content   string             `json:"content" bson:"content"`
}

type Payload struct {
	RequestID   string `json:"requestId"`
	PartnerCode string `json:"partnerCode"`
	AccessKey   string `json:"accessKey"`
	Amount      uint64 `json:"amount"`
	OrderID     string `json:"orderId"`
	OrderInfo   string `json:"orderInfo"`
	RedirectUrl string `json:"redirectUrl"`
	IpnUrl      string `json:"ipnUrl"`
	ExtraData   string `json:"extraData"`
	RequestType string `json:"requestType"`
	Signature   string `json:"signature"`
}

type MessageSend struct {
	PhoneNumberTo string `json:"phoneTo"`
	BodyMessage   string `json:"bodyMessage"`
}

type Response struct {
	Status string      `json:"status"`
	Code   uint        `json:"code"`
	Msg    interface{} `json:"message"`
	Data   interface{} `json:"data"`
}
