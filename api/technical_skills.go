package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func TechnicalSkills(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/technical_skills"

	r.GET(ROUTE, func(c *gin.Context) {
		t, err := db.GetAllTechnicalSkills(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, t)
	})
}
