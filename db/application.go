package db

import (
	"context"

	"kylejohnson-xyz/api_types"
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

type DescriptionItem struct {
	Description string    `json:"descriptions"`
	Id          uuid.UUID `json:"id"`
}

type TechnologyItem struct {
	Name     string    `json:"name"`
	Id       uuid.UUID `json:"id"`
	Url      string    `json:"url"`
	Priority int32     `json:"priority"`
}

func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) (api_types.ApplicationJSON, error) {
	a, err := client.Application.Create().
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)

	return mapApplicationEntToJSON(a, ctx), err
}

type TAddApplicationDescription struct {
	ApplicationId uuid.UUID `json:"application_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

func AddApplicationDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationDescription,
) (api_types.ApplicationJSON, error) {
	t, err := client.Application.UpdateOneID(p.ApplicationId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return mapApplicationEntToJSON(t, ctx), err
}

type TAddApplicationTechnology struct {
	Id   uuid.UUID `json:"id"`
	Name string    `json:"name"`
}

func AddApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationTechnology,
) (api_types.TechnologyJSON, error) {
	t, err := client.Technology.Create().SetName(p.Name).Save(ctx)
	client.Application.UpdateOneID(p.Id).AddTechnologies(t).Save(ctx)
	return mapTechnologyEntToJSON(t, ctx), err
}

type TDeleteApplication struct {
	Id uuid.UUID `json:"id"`
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) error {
	err := client.Application.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllApplications(ctx context.Context, client *ent.Client) ([]api_types.ApplicationJSON, error) {
	items, err := client.Application.Query().Order(ent.Asc(application.FieldPriority)).All(ctx)
	return mapApplicationEntSliceToJSON(items, ctx), err
}

type TRemoveApplicationTechnology struct {
	Id           uuid.UUID `json:"id"`
	TechnologyId uuid.UUID `json:"technology_id"`
}

func RemoveApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TRemoveApplicationTechnology,
) (api_types.ApplicationJSON, error) {
	a, err := client.Application.UpdateOneID(p.Id).RemoveTechnologyIDs(p.TechnologyId).Save(ctx)
	return mapApplicationEntToJSON(a, ctx), err
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
) api_types.ApplicationJSON {
	a, _ := client.Application.UpdateOneID(p.Id).
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
	return mapApplicationEntToJSON(a, ctx)
}

func mapApplicationEntToJSON(x *ent.Application, ctx context.Context) api_types.ApplicationJSON {
	d := x.QueryDescriptions().AllX(ctx)
	descriptions := []api_types.DescriptionJSON{}
	for _, y := range d {
		i := mapDescriptionEntToJSON(y)
		descriptions = append(descriptions, i)
	}
	t := x.QueryTechnologies().AllX(ctx)
	technologies := []api_types.TechnologyJSON{}
	for _, z := range t {
		i := mapTechnologyEntToJSON(z, ctx)
		technologies = append(technologies, i)
	}
	s := api_types.ApplicationJSON{
		Id:           x.ID,
		Name:         x.Name,
		Url:          x.URL,
		Active:       x.Active,
		Priority:     x.Priority,
		Descriptions: descriptions,
		Technologies: technologies,
	}
	return s
}

func mapApplicationEntSliceToJSON(a []*ent.Application, ctx context.Context) []api_types.ApplicationJSON {
	j := []api_types.ApplicationJSON{}

	for _, x := range a {
		s := mapApplicationEntToJSON(x, ctx)
		j = append(j, s)
	}

	return j
}
