package main

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"

	"kylejohnson-xyz/api"
	"kylejohnson-xyz/auth"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/contrib/static"
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
	api.Technology(r, ctx, client)
	api.User(r, ctx, client)
	auth.SetupUserSignup(r, ctx, client)
}

func setupProtectedRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.InviteProtected(r, ctx, client)
	api.SeedProtected(r, ctx, client)
	api.ApplicationProtected(r, ctx, client)
	api.DescriptionProtected(r, ctx, client)
	api.EducationProtected(r, ctx, client)
	api.ExperienceProtected(r, ctx, client)
	api.LogoutProtected(r, ctx, client)
	api.SnapshotProtected(r, ctx, client)
	api.TechnologyProtected(r, ctx, client)
}

func ReverseProxy(c *gin.Context) {
	remote, _ := url.Parse("http://localhost:5173")
	proxy := httputil.NewSingleHostReverseProxy(remote)
	proxy.Director = func(req *http.Request) {
		req.Header = c.Request.Header
		req.Host = remote.Host
		req.URL = c.Request.URL
		req.URL.Scheme = remote.Scheme
		req.URL.Host = remote.Host
	}

	proxy.ServeHTTP(c.Writer, c.Request)
}

func seedUser(ctx context.Context, client *ent.Client) {
	client.Invite.
		Create().
		SetKey("asdf").
		SetEmail("kylejohnson92294@gmail.com").
		Save(ctx)
}

func main() {
	err := godotenv.Load(".env.local")
	if err != nil {
		return
	}
	client := db.GetClient()
	r := gin.Default()

	ctx := context.Background()

	api := r.Group("/api")

	seedUser(ctx, client)
	setupRoutes(api, ctx, client)
	// api.Use(middleware.JwtAuthMiddleware())
	setupProtectedRoutes(api, ctx, client)

	if os.Getenv("GO_ENV") == "development" {
		fmt.Println("Dev environment detected. Reverse proxying dev server")
		r.NoRoute(ReverseProxy)
	} else {
		r.Use(static.Serve("/", static.LocalFile("./ui/dist", true)))
	}
	r.Run("localhost:8080")
}
