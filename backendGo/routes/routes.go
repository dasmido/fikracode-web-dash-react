package routes

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"backendgo/auth"
	"backendgo/controllers"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Configure CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // your Next.js frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/login", controllers.LoginHandler)
	r.GET("/callback", controllers.CallbackHandler)

	protected := r.Group("/")
	protected.Use(auth.AuthRequired())
	protected.GET("/dashboard", controllers.DashboardHandler)

	return r
}
