package controllers

import (
	"backend/utils"
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

type OrderRequest struct {
	OrderID   string `json:"order_id"`
	FullName  string `json:"full_name"`
	Email     string `json:"email"`
	CreatedAt string `json:"created_at"` // or use time.Time if preferred
}

func CreateOrder() gin.HandlerFunc {
	return func(c *gin.Context) {
		var req OrderRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(400, gin.H{"error": "Invalid data: " + err.Error()})
			return
		}

		// If created_at is not provided by the client, set it to current time
		if req.CreatedAt == "" {
			req.CreatedAt = time.Now().Format("02/01/2006 15:04")
		}

		// Email content without total
		orderInfo := fmt.Sprintf(
			`Thank you, %s, for shopping with us!

Order ID: %s
Order Date: %s

We will process your order and deliver it to you as soon as possible. Thank you for your trust!`,
			req.FullName,
			req.OrderID,
			req.CreatedAt,
		)

		// Send confirmation email
		err := utils.SendOrderEmail(req.Email, "Order Confirmation", orderInfo)
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to send email: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Order created and confirmation email sent successfully!"})
	}
}
