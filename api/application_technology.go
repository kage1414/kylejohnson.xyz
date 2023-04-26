package api

import (
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

var ROUTE string = "/api/application_technology"

func post(r *gin.Engine) {
	r.POST(ROUTE, func(c *gin.Context) {
		jsonData, err := ioutil.ReadAll(c.Request.Body)

		c.JSON(http.StatusOK, gin.H{})
	})
}