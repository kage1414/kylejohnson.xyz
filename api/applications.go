package api

import (
	"context"
	"net/http"

	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type DescriptionItem struct {
	Description string    `json:"descriptions"`
	Id          uuid.UUID `json:"id"`
}

type TechnologyItem struct {
	Name     string    `json:"name"`
	Id       uuid.UUID `json:"id"`
	Url      string    `json:"url"`
	Priority int32     `json:"priority"`
}

type ApplicationItem struct {
	Id           uuid.UUID         `json:"id"`
	Name         string            `json:"name"`
	Url          string            `json:"url"`
	Active       bool              `json:"active"`
	Descriptions []DescriptionItem `json:"descriptions"`
	Technologies []TechnologyItem  `json:"technologies"`
	Priority     int32             `json:"priority"`
}

func Applications(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/applications"

	r.GET(ROUTE, func(c *gin.Context) {
		a := db.GetAllApplications(ctx, client)
		j := mapToStruct(a, ctx)
		c.JSON(http.StatusOK, gin.H{"data": j})
	})
}

func mapToStruct(a []*ent.Application, ctx context.Context) []ApplicationItem {
	j := []ApplicationItem{}

	for _, x := range a {
		d := x.QueryDescriptions().AllX(ctx)
		descriptions := []DescriptionItem{}
		for _, y := range d {
			i := DescriptionItem{
				Description: y.Description,
				Id:          y.ID,
			}
			descriptions = append(descriptions, i)
		}
		t := x.QueryTechnologies().AllX(ctx)
		technologies := []TechnologyItem{}
		for _, z := range t {
			i := TechnologyItem{
				Name:     z.Name,
				Url:      z.URL,
				Priority: z.Priority,
				Id:       z.ID,
			}
			technologies = append(technologies, i)
		}
		s := ApplicationItem{
			Id:           x.ID,
			Name:         x.Name,
			Url:          x.URL,
			Active:       x.Active,
			Priority:     x.Priority,
			Descriptions: descriptions,
			Technologies: technologies,
		}
		j = append(j, s)
	}

	return j
}
