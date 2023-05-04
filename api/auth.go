package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	token "kylejohnson-xyz/utils"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type SignupInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Name     string `json:"name"`
}

func Signup(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	r.POST("/signup", func(c *gin.Context) {
		var input SignupInput

		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		_, err := db.AddUser(ctx, client, db.TAddUser{
			Username: input.Username,
			Password: input.Password,
			Name:     &input.Name,
			Email:    input.Email,
		})
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}

		c.JSON(http.StatusOK, gin.H{"data": "signup success"})
	})
}

func LoginCheck(username string, password string, ctx context.Context, client *ent.Client) (string, error) {
	var err error

	u, err := db.GetUser(ctx, client, db.TGetUser{Username: username})
	if err != nil {
		return "", err
	}

	err = VerifyPassword(password, u.PasswordHash)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}

	token, err := token.GenerateToken(u.ID)
	if err != nil {
		return "", err
	}

	return token, nil
}

func VerifyPassword(password, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}
