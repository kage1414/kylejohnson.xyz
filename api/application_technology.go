package api

import (
	"context"
	"encoding/json"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"net/http"

	"github.com/gin-gonic/gin"
)

var ROUTE string = "/api/application_technology"

func Setup(r *gin.Engine, ctx context.Context, client *ent.Client) {
	r.POST(ROUTE, func(c *gin.Context) {
		var p db.TAddApplicationTechnology
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a := db.AddApplicationTechnology(ctx, client, p)

		c.JSON(http.StatusOK, gin.H{"data": a})
	})
}
