package api

import (
	"context"
	"encoding/json"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type TGetRecordId struct {
	Id string `json:"id"`
}

func getRecordId(c *gin.Context) (uuid.UUID, error) {
	var i TGetRecordId
	jErr := json.NewDecoder(c.Request.Body).Decode(&i)
	uid, uErr := uuid.Parse(i.Id)
	var err error
	if jErr != nil {
		err = jErr
	} else {
		err = uErr
	}
	return uid, err
}

func Description(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/description"
	r.GET(ROUTE, func(c *gin.Context) {
		id, rErr := getRecordId(c)
		if rErr != nil {
			c.AbortWithError(http.StatusBadRequest, rErr)
			return
		}

		d, err := db.GetDescription(ctx, client, db.TGetDescription{Id: id})
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, rErr)
			return
		}
		c.JSON(http.StatusOK, d)
	})
}

type link string

const (
	experience  link = "experience"
	application link = "application"
)

type DescriptionRequestBody struct {
	Link        link      `json:"link"`
	RecordId    uuid.UUID `json:"record_id"`
	Description string    `json:"description"`
	Priority    int32     `json:"priority"`
}

func DescriptionProtected(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/description"

	r.PUT(ROUTE, func(c *gin.Context) {
		var desc db.TUpdateDescription
		err := json.NewDecoder(c.Request.Body).Decode(&desc)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		d, dErr := db.UpdateDescription(ctx, client, desc)
		if dErr != nil {
			c.AbortWithError(http.StatusBadRequest, dErr)
			return
		}
		c.JSON(http.StatusOK, d)
	})

	r.POST(ROUTE, func(c *gin.Context) {
		id, rErr := getRecordId(c)
		if rErr != nil {
			c.AbortWithError(http.StatusBadRequest, rErr)
			return
		}
		var descriptionRequestBody DescriptionRequestBody
		err := json.NewDecoder(c.Request.Body).Decode(&descriptionRequestBody)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		d, dErr := db.AddDescription(ctx, client, db.TAddDescription{Description: descriptionRequestBody.Description})
		if dErr != nil {
			c.AbortWithError(http.StatusBadRequest, dErr)
			return
		}
		switch descriptionRequestBody.Link {
		case experience:
			_, eErr := db.AddExperienceDescription(ctx, client, db.TAddExperienceDescription{
				ExperienceId:  id,
				DescriptionId: d.Id,
			})
			if eErr != nil {
				c.AbortWithError(http.StatusBadRequest, eErr)
				return
			}
			c.JSON(http.StatusOK, d)
		case application:
			_, aErr := db.AddApplicationDescription(ctx, client, db.TAddApplicationDescription{
				ApplicationId: id,
				DescriptionId: d.Id,
			})
			if aErr != nil {
				c.AbortWithError(http.StatusBadRequest, aErr)
				return
			}
			c.JSON(http.StatusOK, d)
		default:
			c.JSON(http.StatusOK, d)
		}
	})

	r.DELETE(ROUTE, func(c *gin.Context) {
		id, rErr := getRecordId(c)
		if rErr != nil {
			c.AbortWithError(http.StatusBadRequest, rErr)
			return
		}
		err := db.DeleteDescription(ctx, client, db.TDeleteDescription{Id: id})
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		c.Status(http.StatusOK)
	})
}
