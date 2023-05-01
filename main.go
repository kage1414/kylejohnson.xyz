package main

import (
	"context"
	"kylejohnson-xyz/api"
	"kylejohnson-xyz/db"

	"github.com/gin-gonic/gin"
)

func setupRoutes(r *gin.Engine) {
	client := db.GetClient()
	ctx := context.Background()
	api.Application(r, ctx, client)
	api.Applications(r, ctx, client)
	api.Seed(r, ctx, client)
}

func main() {
	script();
	r := gin.Default()
	setupRoutes(r)
	r.Run("localhost:8080")
}
