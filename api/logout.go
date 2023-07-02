package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func LogoutProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/logout"

	r.POST(ROUTE, func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"token": nil})
	})
}
