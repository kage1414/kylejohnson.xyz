package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"

	"kylejohnson-xyz/api"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/middleware"

	jwt "github.com/appleboy/gin-jwt"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func setupRoutes(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	api.Applications(r, ctx, client)
	api.Description(r, ctx, client)
	api.Education(r, ctx, client)
	api.Experience(r, ctx, client)
	api.TechStacks(r, ctx, client)
	api.TechnicalSkills(r, ctx, client)
	api.Technology(r, ctx, client)
	api.User(r, ctx, client)
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

func main() {
	reactRoutes := []string{"/", "/admin", "/signup", "login"}
	err := godotenv.Load(".env.local")
	if err != nil {
		return
	}
	client := db.GetClient()
	r := gin.Default()

	ctx := context.Background()

	api := r.Group("/api")

	setupRoutes(api, ctx, client)
	authMiddleware, err := middleware.JwtAuthMiddleware()
	if err != nil {
		log.Fatal("JWT Error:" + err.Error())
	}

	// When you use jwt.New(), the function is already automatically called for checking,
	// which means you don't need to call it again.
	errInit := authMiddleware.MiddlewareInit()

	if errInit != nil {
		log.Fatal("authMiddleware.MiddlewareInit() Error:" + errInit.Error())
	}

	api.POST("/login", authMiddleware.LoginHandler)

	r.NoRoute(authMiddleware.MiddlewareFunc(), func(c *gin.Context) {
		claims := jwt.ExtractClaims(c)
		log.Printf("NoRoute claims: %#v\n", claims)
		c.JSON(404, gin.H{"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})

	api.Use(authMiddleware.MiddlewareFunc())
	setupProtectedRoutes(api, ctx, client)

	if os.Getenv("GO_ENV") == "development" {
		fmt.Println("Dev environment detected. Reverse proxying dev server")
		r.NoRoute(ReverseProxy)
	} else {
		for _, route := range reactRoutes {
			r.Use(static.Serve(route, static.LocalFile("./ui/dist", true)))
		}
	}
	r.Run("localhost:8080")
}
