package utils

import (
	"fmt"
	"net/smtp"
)

func SendOrderEmail(toEmail, subject, body string) error {
	from := "thefitthlabel@gmail.com"
	password := "pgaa ojtf kyld dkcb" // App password tạo ở bước 1

	// SMTP server configuration.
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Message.
	message := []byte(fmt.Sprintf("Subject: %s\r\n\r\n%s", subject, body))

	// Authentication.
	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Sending email.
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{toEmail}, message)
	return err
}
