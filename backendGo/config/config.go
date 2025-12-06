package config

import "golang.org/x/oauth2"

var KindeOAuthConfig = &oauth2.Config{
	ClientID:     "e0c9cc9ac4984998a35d77dfe437b58d",
	ClientSecret: "TYXmAj4XqageQmEXkt9tFuHC56hXp8XVbVEgEH1xwj4ngbEKiXhe",
	RedirectURL:  "http://localhost:8080/callback",
	Scopes:       []string{"openid", "profile", "email"},
	Endpoint: oauth2.Endpoint{
		AuthURL:  "https://calendrey.kinde.com/oauth2/auth",
		TokenURL: "https://calendrey.kinde.com/oauth2/token",
	},
}

const KindeUserInfoURL = "https://api.kinde.com/v1/user"

/*func InitDB() (*gorm.DB, error) {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=UTC",
		host, user, password, dbname, port)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return 	}

	return db, nil
}*/
