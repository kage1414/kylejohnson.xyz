package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func TechStacks(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/tech_stacks"

	r.GET(ROUTE, func(c *gin.Context) {
		t, err := db.GetTechStacks(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, gin.H{"data": t})
	})
}
