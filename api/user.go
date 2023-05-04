package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	token "kylejohnson-xyz/utils"

	"github.com/gin-gonic/gin"
)

func UserProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/user"

	r.GET(ROUTE, func(c *gin.Context) {
		CurrentUser(c, ctx, client)
	})
}

func CurrentUser(c *gin.Context, ctx context.Context, client *ent.Client) {
	user_id, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u, err := db.GetUserById(ctx, client, db.TGetUserById{Id: user_id})
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success", "data": u})
}
