package api

import (
	"context"
	"fmt"
	"net/http"
	"os"

	jwt "github.com/appleboy/gin-jwt/v2"

	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func User(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/user"

	r.GET(ROUTE, func(c *gin.Context) {
		CurrentUser(c, ctx, client)
	})
}

type TCurrentUser struct {
	Username string `json:"username"`
	Name     string `json:"name"`
}

func CurrentUser(c *gin.Context, ctx context.Context, client *ent.Client) {
	claims := jwt.ExtractClaims(c)
	// _, err := token.ExtractTokenID(c)
	fmt.Println("claims", claims)
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }

	c.JSON(http.StatusOK, gin.H{"message": "success", "data": TCurrentUser{
		Username: os.Getenv("ADMIN_USERNAME"),
		Name:     "Kyle Johnson",
	}})
}
