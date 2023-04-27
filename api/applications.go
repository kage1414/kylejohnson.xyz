package api

import (
	"context"
	"fmt"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"net/http"

	"github.com/gin-gonic/gin"
)

type description struct {
	description string
	id int
}

type technology struct {
	name string
	id int
	url string
}

type ResponseGet struct {
	id int `json:"id"`
	name string
	url string
	active bool
	descriptions []description
	technologies []technology
	priority int32
}


func Applications(r *gin.Engine, ctx context.Context, client *ent.Client) {
	ROUTE := "/api/applications"

	r.GET(ROUTE, func(c *gin.Context) {
		a := db.GetAllApplications(ctx, client)
		fmt.Println(a)

		// r := []ResponseGet{}
		for i := 0; i < len(a); i++ {
			app := a[i].QueryDescriptions().AllX(ctx)
			fmt.Println(app)
			// r := append(r, )
		}
		c.JSON(http.StatusOK, gin.H{"data": a})
	})
}