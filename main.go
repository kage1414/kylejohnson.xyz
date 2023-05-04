package main

import (
	"context"

	"kylejohnson-xyz/api"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/middleware"

	"github.com/gin-gonic/gin"
)

func setupRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.Applications(r, ctx, client)
	api.Signup(r, ctx, client)
	api.Login(r, ctx, client)
	api.Description(r, ctx, client)
}

func setupProtectedRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.ApplicationProtected(r, ctx, client)
	api.SeedProtected(r, ctx, client)
	api.DescriptionProtected(r, ctx, client)
}

func main() {
	r := gin.Default()
	client := db.GetClient()
	ctx := context.Background()
	script(ctx, client)

	api := r.Group("/api")

	setupRoutes(api, ctx, client)
	api.Use(middleware.JwtAuthMiddleware())
	setupProtectedRoutes(api, ctx, client)

	r.Run("localhost:8080")
}
