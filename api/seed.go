package api

import (
	"context"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/seed"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Seed(r *gin.Engine, ctx context.Context, client *ent.Client) {
	var ROUTE string = "/api/seed"
	r.POST(ROUTE, func(c *gin.Context) {
		seed.Seed(client, ctx)
		c.Status(http.StatusOK)
	})
}