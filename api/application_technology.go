package api

import (
	"io/ioutil"
	"kylejohnson-xyz/ent"
	"net/http"

	"github.com/gin-gonic/gin"
)

var ROUTE string = "/api/application_technology"

func post(r *gin.Engine) {
	r.POST(ROUTE, func(c *gin.Context) {
		jsonData, err := ioutil.ReadAll(c.Request.Body)
		ent.ApplicationUpdateOne()
		c.JSON(http.StatusOK, gin.H{})
	})
}