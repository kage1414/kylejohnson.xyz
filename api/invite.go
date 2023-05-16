package api

import (
	"bytes"
	"context"
	"crypto/rand"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"html/template"
	"math/big"
	"net/http"
	"os"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
	gomail "gopkg.in/mail.v2"
)

type InviteBody struct {
	Email string `json:"email"`
}

type InviteHeader struct {
	Origin string `json:"origin"`
}

func InviteProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/invite"

	r.POST(ROUTE, func(c *gin.Context) {
		var reqbody InviteBody
		bErr := json.NewDecoder(c.Request.Body).Decode(&reqbody)
		if bErr != nil {
			c.AbortWithError(http.StatusBadRequest, bErr)
			return
		}
		var origin string
		if os.Getenv("GO_ENV") == "development" {
			origin = "http://127.0.0.1:3000"
		} else {
			origin = "https://www.kylejohnson.xyz"
		}
		signupKey, err := GenerateRandomString(32)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}

		signupLink := fmt.Sprintf("%s/signup?key=%s", origin, signupKey)
		from := os.Getenv("EMAIL")
		password := os.Getenv("APP_PASSWORD")

		toField := reqbody.Email

		i, iErr := db.CreateInvite(ctx, client, db.TCreateInvite{Email: toField, Key: signupKey})
		if iErr != nil {
			c.AbortWithError(http.StatusBadRequest, iErr)
			return
		}
		// Receiver email address.
		// to := []string{
		// toField,
		// }

		// smtp server configuration.
		smtpHost := "smtp.gmail.com"
		smtpPort := 587

		// Authentication.
		// auth := smtp.PlainAuth("", from, password, smtpHost)
		t, tErr := template.ParseFiles("api/invite.html")

		if tErr != nil {
			c.AbortWithError(http.StatusBadRequest, tErr)
			return
		}

		var body bytes.Buffer

		// mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
		// body.Write([]byte(fmt.Sprintf("Subject: This is a test subject \n%s\n\n", mimeHeaders)))

		t.Execute(&body, struct {
			SignupLink string
		}{
			SignupLink: signupLink,
		})

		m := gomail.NewMessage()

		// Set E-Mail sender
		m.SetHeader("From", "from@gmail.com")

		// Set E-Mail receivers
		m.SetHeader("To", reqbody.Email)

		// Set E-Mail subject
		m.SetHeader("Subject", "Invite to kylejohnson.xyz")

		// Set E-Mail body. You can set plain text or html with text/html
		m.SetBody("text/html", body.String())

		// Settings for SMTP server
		d := gomail.NewDialer(smtpHost, smtpPort, from, password)

		// This is only needed when SSL/TLS certificate is not valid on server.
		// In production this should be set to false.
		d.TLSConfig = &tls.Config{InsecureSkipVerify: true}
		// Now send E-Mail
		if eErr := d.DialAndSend(m); eErr != nil {
			client.Invite.DeleteOneID(i.ID).Exec(ctx)
			fmt.Println(err)
			c.AbortWithError(http.StatusBadRequest, eErr)
			// panic(err)
			return
		}

		c.Status(http.StatusOK)
	})
}

func GenerateRandomString(n int) (string, error) {
	const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-"
	ret := make([]byte, n)
	for i := 0; i < n; i++ {
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(letters))))
		if err != nil {
			return "", err
		}
		ret[i] = letters[num.Int64()]
	}

	return string(ret), nil
}
