package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func DBSet() *mongo.Client {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatalf("❌ Failed to create MongoDB client: %v", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatalf("❌ Failed to connect MongoDB client: %v", err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatalf("❌ Failed to ping MongoDB: %v", err)
	}

	fmt.Println("✅ Successfully connected to MongoDB")
	return client
}

var Client *mongo.Client = DBSet()

func UserData(client *mongo.Client, collectionName string) *mongo.Collection {
	return client.Database("Ecommerce").Collection(collectionName)
}

func ProductData(client *mongo.Client, collectionName string) *mongo.Collection {
	return client.Database("Ecommerce").Collection(collectionName)
}

func OrderData(client *mongo.Client, collectionName string) *mongo.Collection {
	return client.Database("Ecommerce").Collection(collectionName)
}

func PayloadData(client *mongo.Client, collectionName string) *mongo.Collection {
	return client.Database("Ecommerce").Collection(collectionName)
}

func MessageData(client *mongo.Client, collectionName string) *mongo.Collection {
	return client.Database("Ecommerce").Collection(collectionName)
}
