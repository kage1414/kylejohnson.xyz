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
	script(ctx, client)
	api.Application(r, ctx, client)
	api.Applications(r, ctx, client)
	api.Seed(r, ctx, client)
	api.SignupEndpoint(r, ctx, client)
	api.LoginEndpoint(r, ctx, client)
}

func main() {
	r := gin.Default()
	setupRoutes(r)
	r.Run("localhost:8080")
}
