package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func Applications(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/applications"

	r.GET(ROUTE, func(c *gin.Context) {
		a := db.GetAllApplications(ctx, client)
		c.JSON(http.StatusOK, gin.H{"data": a})
	})
}
