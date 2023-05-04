package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func ApplicationProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/application"

	r.PUT(ROUTE, func(c *gin.Context) {
		var p db.TUpdateApplication
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}

		a := db.UpdateApplication(ctx, client, p)

		c.JSON(http.StatusOK, gin.H{"data": a})
	})

	r.POST(ROUTE, func(c *gin.Context) {
		var p db.TAddApplication
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a, err := db.AddApplication(ctx, client, p)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}

		c.JSON(http.StatusOK, gin.H{"data": a})
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		var p db.TDeleteApplication
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a := db.DeleteApplication(ctx, client, p)
		if a != nil {
			c.Status(http.StatusBadRequest)
			return
		}

		c.Status(http.StatusOK)
	})
}
