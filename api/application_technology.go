package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func ApplicationTechnologyProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	var ROUTE string = "/application_technology"

	r.POST(ROUTE, func(c *gin.Context) {
		var p db.TAddApplicationTechnology
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a, dbErr := db.AddApplicationTechnology(ctx, client, p)
		if dbErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
		c.JSON(http.StatusOK, gin.H{"data": a})
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		var p db.TRemoveApplicationTechnology
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a, dbErr := db.RemoveApplicationTechnology(ctx, client, p)
		if dbErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
		c.JSON(http.StatusOK, gin.H{"data": a})
	})
}
