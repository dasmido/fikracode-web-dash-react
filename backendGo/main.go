package main

import (
	"fmt"
	"log"
	"os"

	"backendgo/config"
	"backendgo/models"
	"backendgo/routes"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	if err := godotenv.Load(); err != nil {
		log.Println(".env not found, using environment variables")
	}

	// init DB
	db, err := config.InitDB()
	if err != nil {
		log.Fatalf("failed to connect database: %v", err)
	}

	// Auto Migrate
	if err := db.AutoMigrate(&models.User{}, &models.Payment{}); err != nil {
		log.Fatalf("auto mograte failed: %v", err)
	}

	// routes
	r := gin.Default()
	routes.Setup(r, db)

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "8080"
	}
	addr := fmt.Sprintf(":%s", port)
	log.Printf("listenng on port http://localhost:%s", addr)

	if err := r.Run(addr); err != nil {
		log.Fatalf("Failed to start server %v", err)
	}
}
