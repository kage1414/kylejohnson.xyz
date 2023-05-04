package api

import (
	"bytes"
	"context"
	"crypto/rand"
	"encoding/json"
	"fmt"
	"html/template"
	"math/big"
	"net/http"
	"net/smtp"
	"os"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
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
		}
		origin := c.Request.Header.Get("Origin")
		signupKey, err := GenerateRandomString(32)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}

		signupLink := fmt.Sprintf("%s/signup?key=%s", origin, signupKey)
		email := os.Getenv("EMAIL")
		appPassword := os.Getenv("APP_PASSWORD")

		from := email
		password := appPassword
		toField := reqbody.Email

		i, iErr := db.CreateInvite(ctx, client, db.TCreateInvite{Email: toField, Key: signupKey})
		if iErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		// Receiver email address.
		to := []string{
			toField,
		}

		// smtp server configuration.
		smtpHost := "smtp.gmail.com"
		smtpPort := "587"

		// Authentication.
		auth := smtp.PlainAuth("", from, password, smtpHost)

		t, _ := template.ParseFiles("invite.html")

		var body bytes.Buffer

		mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
		body.Write([]byte(fmt.Sprintf("Subject: This is a test subject \n%s\n\n", mimeHeaders)))

		t.Execute(&body, struct {
			SignupLink string
		}{
			SignupLink: signupLink,
		})

		eErr := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, body.Bytes())
		if eErr != nil {
			client.Invite.DeleteOneID(i.ID).Exec(ctx)
			c.AbortWithError(http.StatusBadRequest, err)
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
