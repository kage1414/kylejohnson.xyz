package db

import (
	"context"

	"kylejohnson-xyz/api_types"
	"kylejohnson-xyz/ent"

	"github.com/google/uuid"
)

type TAddDescription struct {
	Description string `json:"description"`
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) (api_types.DescriptionJSON, error) {
	d, err := client.Description.Create().SetDescription(p.Description).Save(ctx)
	return mapDescriptionEntToJSON(d), err
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

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) (api_types.DescriptionJSON, error) {
	d, err := client.Description.Get(ctx, p.Id)
	return mapDescriptionEntToJSON(d), err
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
) (api_types.DescriptionJSON, error) {
	d, err := client.Description.UpdateOneID(p.Id).
		SetDescription(p.Description).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return mapDescriptionEntToJSON(d), err
}

func mapDescriptionEntToJSON(e *ent.Description) api_types.DescriptionJSON {
	d := api_types.DescriptionJSON{
		Id:          e.ID,
		Description: e.Description,
		Priority:    e.Priority,
		Active:      e.Active,
	}
	return d
}

func mapDescriptionEntSliceToJSON(e []*ent.Description) []api_types.DescriptionJSON {
	d := []api_types.DescriptionJSON{}
	for _, x := range e {
		f := mapDescriptionEntToJSON(x)
		d = append(d, f)
	}
	return d
}
