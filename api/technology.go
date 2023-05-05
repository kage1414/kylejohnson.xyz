package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func Technology(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/technologies"
	r.GET(ROUTE, func(c *gin.Context) {
		t, err := db.GetAllTechnologies(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, gin.H{"data": t})
	})
}

type (
	putTechnologyBody    = db.TUpdateTechnology
	postTechnologyBody   = db.TAddTechnology
	deleteTechnologyBody = db.TDeleteTechnology
)

func TechnologyProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/technology"

	r.PUT(ROUTE, func(c *gin.Context) {
		var body putTechnologyBody
		bErr := json.NewDecoder(c.Request.Body).Decode(&body)
		if bErr != nil {
			c.AbortWithError(http.StatusBadRequest, bErr)
		}
		t, err := db.UpdateTechnology(ctx, client, body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, gin.H{"data": t})
	})

	r.POST(ROUTE, func(c *gin.Context) {
		var body postTechnologyBody
		bErr := json.NewDecoder(c.Request.Body).Decode(&body)
		if bErr != nil {
			c.AbortWithError(http.StatusBadRequest, bErr)
		}
		t, err := db.AddTechnology(ctx, client, body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, gin.H{"data": t})
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		var body deleteTechnologyBody
		bErr := json.NewDecoder(c.Request.Body).Decode(&body)
		if bErr != nil {
			c.AbortWithError(http.StatusBadRequest, bErr)
		}
		err := db.DeleteTechnology(ctx, client, body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.Status(http.StatusOK)
	})
}
