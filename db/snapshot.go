package db

import (
	"context"

	"kylejohnson-xyz/ent"
)

func SnapshotApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().All(ctx)
	return items
}

func SnapshotEducation(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

func SnapshotExperience(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
}

func SnapshotTechnologies(ctx context.Context, client *ent.Client) []*ent.Technology {
	items, _ := client.Technology.Query().All(ctx)
	return items
}
