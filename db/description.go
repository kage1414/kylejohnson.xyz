package db

import (
	"context"

	"kylejohnson-xyz/ent"

	"github.com/google/uuid"
)

type TAddDescription struct {
	Description string `json:"description"`
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) (*ent.Description, error) {
	d, err := client.Description.Create().SetDescription(p.Description).Save(ctx)
	return d, err
}

type TDeleteDescription struct {
	Id uuid.UUID `json:"id"`
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) error {
	err := client.Description.DeleteOneID(p.Id).Exec(ctx)
	return err
}

type TGetDescription struct {
	Id uuid.UUID `json:"id"`
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) (*ent.Description, error) {
	d, err := client.Description.Get(ctx, p.Id)
	return d, err
}

type TUpdateDescription struct {
	Id          uuid.UUID `json:"id"`
	Description string    `json:"description"`
	Priority    *int32    `json:"priority,omitempty"`
}

func UpdateDescription(
	ctx context.Context,
	client *ent.Client,
	p TUpdateDescription,
) (*ent.Description, error) {
	d, err := client.Description.UpdateOneID(p.Id).
		SetDescription(p.Description).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return d, err
}
