package main

import (
	"backendgo/routes"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	if err := godotenv.Load(); err != nil {
		log.Println(".env not found, using environment variables")
	}

	// routes
	r := routes.SetupRouter()
	port := "8080"

	log.Printf("🚀 Server is listening on port %s\n", port)
	if err := r.Run(":" + port); err != nil {
		log.Printf("Failed. to start server: %v", err)
	}

}
