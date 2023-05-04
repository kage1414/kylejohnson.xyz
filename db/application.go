package db

import (
	"context"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/application"

	"github.com/google/uuid"
)

type TAddApplication struct {
	Name     *string `json:"name,omitempty"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Active   *bool   `json:"active,omitempty"`
}

func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) (*ent.Application, error) {
	a, err := client.Application.Create().
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
	return a, err
}

type TAddApplicationDescription struct {
	ApplicationId uuid.UUID `json:"application_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

func AddApplicationDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationDescription,
) (*ent.Application, error) {
	t, err := client.Application.UpdateOneID(p.ApplicationId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return t, err
}

type TAddApplicationTechnology struct {
	Id   uuid.UUID `json:"id"`
	Name string    `json:"name"`
}

func AddApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationTechnology,
) (*ent.Technology, error) {
	t, err := client.Technology.Create().SetName(p.Name).Save(ctx)
	client.Application.UpdateOneID(p.Id).AddTechnologies(t).Save(ctx)
	return t, err
}

type TDeleteApplication struct {
	Id uuid.UUID `json:"id"`
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) error {
	err := client.Application.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().Order(ent.Asc(application.FieldPriority)).All(ctx)
	return items
}

type TRemoveApplicationTechnology struct {
	Id           uuid.UUID `json:"id"`
	TechnologyId uuid.UUID `json:"technology_id"`
}

func RemoveApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TRemoveApplicationTechnology,
) (*ent.Application, error) {
	a, err := client.Application.UpdateOneID(p.Id).RemoveTechnologyIDs(p.TechnologyId).Save(ctx)
	return a, err
}

type TUpdateApplication struct {
	Id       uuid.UUID `json:"id"`
	Name     *string   `json:"name,omitempty"`
	Url      *string   `json:"url,omitempty"`
	Priority *int32    `json:"priority,omitempty"`
	Active   *bool     `json:"active,omitempty"`
}

func UpdateApplication(
	ctx context.Context,
	client *ent.Client,
	p TUpdateApplication,
) *ent.Application {
	a, _ := client.Application.UpdateOneID(p.Id).
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
	return a
}
