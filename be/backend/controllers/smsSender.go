package controllers

import (
	"backend/models"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/twilio/twilio-go"
	twilioApi "github.com/twilio/twilio-go/rest/api/v2010"
)

func SmsSender() gin.HandlerFunc {
	return func(c *gin.Context) {
		var response models.Response
		var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
		defer cancel()
		var messages models.MessageSend
		if err := c.BindJSON(&messages); err != nil {
			response.Status = "Failed"
			response.Code = http.StatusBadRequest
			response.Msg = err.Error()
			c.IndentedJSON(http.StatusBadRequest, response)
			return
		}
		// accountSid := "AC516676b8505af5a3d751e08a8a2c1278"
		// authToken := "502de4fdfe828bb4d0f6cc510a405322"
		accountSid := "ACcb27e1e056c20c137d16cedb3a696bf0"
		authToken := "bcc6b9ca88b572e01e66fc9d6e30d80d"

		client := twilio.NewRestClientWithParams(twilio.ClientParams{
			Username: accountSid,
			Password: authToken,
		})
		params := &twilioApi.CreateMessageParams{}
		params.SetTo(messages.PhoneNumberTo)
		// params.SetFrom("+18058747190")
		params.SetFrom("+18305327669")

		params.SetBody(messages.BodyMessage)
		_, anyErr := MessageCollection.InsertOne(ctx, messages)
		if anyErr != nil {
			response.Status = "Failed"
			response.Code = http.StatusInternalServerError
			response.Msg = "Not created"
			c.IndentedJSON(http.StatusInternalServerError, response)
			return
		}
		resp, err := client.Api.CreateMessage(params)
		if err != nil {
			fmt.Println(err.Error())
		} else {
			response, _ := json.Marshal(*resp)
			fmt.Println("Response: " + string(response))
		}

		response.Status = "OK"
		response.Code = http.StatusOK
		response.Msg = "Messages have been successfully sent by customer"
		c.IndentedJSON(http.StatusOK, response)
		return
	}
}
