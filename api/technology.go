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

func Technology(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/technologies"
	r.GET(ROUTE, func(c *gin.Context) {
		t, err := db.GetAllTechnologies(ctx, client)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
		}
		c.JSON(http.StatusOK, gin.H{"data": mapTechnologiesToJSON(t)})
	})
}

type TechnologyJson struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	Stack    string    `json:"stack"`
	Priority int32     `json:"priority"`
	Url      string    `json:"url"`
}

func mapTechnologyToJSON(t *ent.Technology) TechnologyJson {
	j := TechnologyJson{
		Id:       t.ID,
		Name:     t.Name,
		Stack:    t.Edges.Stack.Stack,
		Priority: t.Priority,
		Url:      t.URL,
	}

	return j
}

func mapTechnologiesToJSON(tech []*ent.Technology) []TechnologyJson {
	arr := []TechnologyJson{}

	for _, t := range tech {
		j := mapTechnologyToJSON(t)
		arr = append(arr, j)
	}

	return arr
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
		c.JSON(http.StatusOK, gin.H{"data": mapTechnologyToJSON(t)})
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
		c.JSON(http.StatusOK, gin.H{"data": mapTechnologyToJSON(t)})
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
