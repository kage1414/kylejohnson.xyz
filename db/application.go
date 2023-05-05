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

type ApplicationJSON struct {
	Id           uuid.UUID         `json:"id"`
	Name         string            `json:"name"`
	Url          string            `json:"url"`
	Active       bool              `json:"active"`
	Descriptions []DescriptionJSON `json:"descriptions"`
	Technologies []TechnologyJSON  `json:"technologies"`
	Priority     int32             `json:"priority"`
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

func GetAllApplications(ctx context.Context, client *ent.Client) []ApplicationJSON {
	items, _ := client.Application.Query().Order(ent.Asc(application.FieldPriority)).All(ctx)
	return mapApplicationEntSliceToJSON(items, ctx)
}

type TRemoveApplicationTechnology struct {
	Id           uuid.UUID `json:"id"`
	TechnologyId uuid.UUID `json:"technology_id"`
}

func RemoveApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TRemoveApplicationTechnology,
) (ApplicationJSON, error) {
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
) ApplicationJSON {
	a, _ := client.Application.UpdateOneID(p.Id).
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
	return mapApplicationEntToJSON(a, ctx)
}

func mapApplicationEntToJSON(x *ent.Application, ctx context.Context) ApplicationJSON {
	d := x.QueryDescriptions().AllX(ctx)
	descriptions := []DescriptionJSON{}
	for _, y := range d {
		i := mapDescriptionEntToJSON(y)
		descriptions = append(descriptions, i)
	}
	t := x.QueryTechnologies().AllX(ctx)
	technologies := []TechnologyJSON{}
	for _, z := range t {
		i := mapTechnologyEntToJSON(z)
		technologies = append(technologies, i)
	}
	s := ApplicationJSON{
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

func mapApplicationEntSliceToJSON(a []*ent.Application, ctx context.Context) []ApplicationJSON {
	j := []ApplicationJSON{}

	for _, x := range a {
		s := mapApplicationEntToJSON(x, ctx)
		j = append(j, s)
	}

	return j
}
