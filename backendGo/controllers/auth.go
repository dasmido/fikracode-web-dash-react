package controllers

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/oauth2"

	"backendgo/config"
)

func LoginHandler(c *gin.Context) {
	url := config.KindeOAuthConfig.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	c.JSON(http.StatusOK, gin.H{"auth_url": url})
}

func CallbackHandler(c *gin.Context) {
	code := c.Query("code")
	state := c.Query("state")

	if state != "state-token" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid state"})
		return
	}

	token, err := config.KindeOAuthConfig.Exchange(context.Background(), code)
	if err != nil {
		log.Println("Token exchange error:", err)
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Token exchange failed"})
		return
	}

	// Return access token in JSON
	c.JSON(http.StatusOK, gin.H{
		"access_token": token.AccessToken,
		"token_type":   token.TokenType,
		"expiry":       token.Expiry,
	})
}
