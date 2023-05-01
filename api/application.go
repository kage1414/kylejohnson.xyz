package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func Application(r *gin.Engine, ctx context.Context, client *ent.Client) {
	ROUTE := "/api/application"

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
		a := db.AddApplication(ctx, client, p)

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
