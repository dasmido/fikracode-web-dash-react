package models

import "time"

type Payment struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Amount      float64   `json:"amount" binding:"required"`
	Currency    string    `json:"currency" binding:"required"`
	Status      string    `json:"status" gorm:"default:'pending'"`
	Description string    `json:"description"`
	UserID      uint      `json:"user_id"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
