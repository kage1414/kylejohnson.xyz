package api

import (
	"context"
	"encoding/json"
	"fmt"
	"kylejohnson-xyz/db"
	"kylejohnson-xyz/ent"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Application(r *gin.Engine, ctx context.Context, client *ent.Client) {
	ROUTE := "/api/application"

	r.POST(ROUTE, func(c *gin.Context) {
		var p db.TAddApplication
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		fmt.Println("here", p)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		a := db.AddApplication(ctx, client, p)

		c.JSON(http.StatusOK, gin.H{"data": a})
	})
}