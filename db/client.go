package db

import (
	"context"
	"log"

	"kylejohnson-xyz/ent"

	_ "github.com/lib/pq"
)

var PG_LOCAL string = "host=localhost port=5432 user=kylejohnson_xyz dbname=kylejohnson_xyz password=hello_world_123 sslmode=disable"

func GetClient() *ent.Client {
	client, err := ent.Open("postgres", PG_LOCAL)
	if err != nil {
		log.Fatalf("failed opening connection to postgres: %v", err)
	}
	defer client.Close()
	// Run the auto migration tool.
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
	return client
}
