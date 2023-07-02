package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/seed"

	"github.com/gin-gonic/gin"
)

func SeedProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	var ROUTE string = "/seed"
	r.POST(ROUTE, func(c *gin.Context) {
		seed.Seed(client, ctx)
		c.Status(http.StatusOK)
	})
}
