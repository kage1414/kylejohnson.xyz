package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
)

type putEducationBody = db.TUpdateEducation

type postEducationBody = db.TAddEducation

type deleteEducationBody = db.TDeleteEducation

func Education(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/educations"
	r.GET(ROUTE, func(c *gin.Context) {
		e, err := db.GetAllEducations(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, e)
	})
}

func EducationProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/education"

	r.PUT(ROUTE, func(c *gin.Context) {
		var body putEducationBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		e, eErr := db.UpdateEducation(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, e)
	})

	r.POST(ROUTE, func(c *gin.Context) {
		var body postEducationBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		e, eErr := db.AddEducation(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.JSON(http.StatusOK, e)
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		var body deleteEducationBody
		err := json.NewDecoder(c.Request.Body).Decode(&body)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		eErr := db.DeleteEducation(ctx, client, body)
		if eErr != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.Status(http.StatusOK)
	})
}
