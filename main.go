package main

import "github.com/gin-gonic/gin"


func setupRoutes(r *gin.Engine) {
	
}

func main() {
	r := gin.Default()
	setupRoutes(r)
	r.Run()
}