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
	api.Setup(r, ctx, client)
}

func main() {
	r := gin.Default()
	setupRoutes(r)
	r.Run()
}
