package db

import (
	"context"
	"log"

	"kylejohnson-xyz/ent"

	_ "github.com/lib/pq"
	_ "github.com/mattn/go-sqlite3"
)

func GetClient() *ent.Client {
	client, err := ent.Open("sqlite3", "file:tmp/ent?_fk=1")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}
	defer client.Close()
	// Run the auto migration tool.
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
	return client
}
