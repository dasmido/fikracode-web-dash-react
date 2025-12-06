package routes

import (
	"github.com/gin-gonic/gin"

	"backendgo/auth"
	"backendgo/controllers"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/login", controllers.LoginHandler)
	r.GET("/callback", controllers.CallbackHandler)

	protected := r.Group("/")
	protected.Use(auth.AuthRequired())
	protected.GET("/dashboard", controllers.DashboardHandler)

	return r
}
