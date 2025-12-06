package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization token required"})
			c.Abort()
			return
		}

		// In a real app, verify JWT or access token here.
		// For simplicity, we'll just pass it along
		c.Set("access_token", authHeader)
		c.Next()
	}
}
