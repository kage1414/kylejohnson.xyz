package api

import (
	"context"

	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func SnapshotProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/snapshot"

	r.POST(ROUTE, func(c *gin.Context) {
	})
}
