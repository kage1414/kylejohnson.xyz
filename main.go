package main

import (
	"context"

	"kylejohnson-xyz/api"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/middleware"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func setupRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.Applications(r, ctx, client)
	api.Signup(r, ctx, client)
	api.Login(r, ctx, client)
	api.Description(r, ctx, client)
	api.Education(r, ctx, client)
	api.Experience(r, ctx, client)
	api.TechStacks(r, ctx, client)
	api.TechnicalSkills(r, ctx, client)
}

func setupProtectedRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.ApplicationProtected(r, ctx, client)
	api.SeedProtected(r, ctx, client)
	api.DescriptionProtected(r, ctx, client)
	api.EducationProtected(r, ctx, client)
	api.ExperienceProtected(r, ctx, client)
	api.InviteProtected(r, ctx, client)
	api.UserProtected(r, ctx, client)
	api.LogoutProtected(r, ctx, client)
	api.SnapshotProtected(r, ctx, client)
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		return
	}
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
