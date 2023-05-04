package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

func Experience(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/experience"
	r.GET(ROUTE, func(c *gin.Context) {
		e, err := db.GetAllExperiences(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, gin.H{"data": e})
	})
}

type (
	putExperienceBody    = db.TUpdateExperience
	postExperienceBody   = db.TAddExperience
	deleteExperienceBody = db.TDeleteExperience
)

func ExperienceProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/experience"

	r.PUT(ROUTE, func(c *gin.Context) {
		var body putExperienceBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		e, eErr := db.UpdateExperience(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, gin.H{"data": e})
	})

	r.POST(ROUTE, func(c *gin.Context) {
		var body postExperienceBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		e, eErr := db.AddExperience(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, gin.H{"data": e})
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		var body deleteExperienceBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		eErr := db.DeleteExperience(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.Status(http.StatusOK)
	})
}
