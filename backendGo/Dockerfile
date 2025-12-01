# Build stage
FROM golang:1.21-alpine AS builder
WORKDIR /app


# install git for fetching modules
RUN apk add --no-cache git


COPY go.mod go.sum ./
RUN go mod download


COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /backendGo


# Final image
FROM alpine:3.18
RUN apk add --no-cache ca-certificates
COPY --from=builder /backendGo /backendGo
EXPOSE 8080
ENTRYPOINT ["/backendGo"]