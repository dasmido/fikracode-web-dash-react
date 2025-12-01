# Go Gin Backend — Starter


## Quick start


1. Copy files into folder
2. Copy `.env.example` to `.env` and adjust
3. Run `make run` or `go run ./`


API endpoints:
- `GET /api/ping` — health
- `GET /api/users` — list users
- `POST /api/users` — create user (JSON body `{ "name": "...", "email": "..." }`)

### Docker build
$ docker build -t backendgo-app .


### Docker run
docker run -p 8080:8080 backendgo-app


## Notes
- Uses SQLite by default for simplicity. Switch to Postgres/MySQL by replacing driver and DSN.
- No middleware is included; add logging, auth, or validation as needed for production.