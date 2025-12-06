package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DashboardHandler(c *gin.Context) {
	//accessToken := c.GetString("access_token")

	c.JSON(http.StatusOK, gin.H{
		"message": "Welcome to your dashboard!",
		"login":   "loggedin",
		//"access_token": accessToken,
	})
}
