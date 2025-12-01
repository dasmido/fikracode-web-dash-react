package models

import (
	"time"
)

type User struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Username  string    `gorm:"uniqueIndex;size:100" json:"username" binding:"required"`
	Email     string    `gorm:"uniqueIndex;size:200" json:"email" binding:"required,email"`
	Password  string    `gorm:"size:255" json:"-"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
