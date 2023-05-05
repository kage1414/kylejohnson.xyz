package db

import (
	"context"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/techstack"

	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
)

type TAddTechnology struct {
	Name     string  `json:"name"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Stack    *string `json:"stack,omitempty"`
}

func AddTechnology(ctx context.Context, client *ent.Client, p TAddTechnology) (TechnologyJSON, error) {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t, err := client.Technology.Create().
		SetName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetStack(s).
		Save(ctx)
	return mapTechnologyEntToJSON(t), err
}

type TDeleteTechnology struct {
	Id uuid.UUID `json:"id"`
}

func DeleteTechnology(ctx context.Context, client *ent.Client, p TDeleteTechnology) error {
	err := client.Technology.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllTechnicalSkills(ctx context.Context, client *ent.Client) ([]*ent.TechStack, error) {
	t, err := client.TechStack.Query().All(ctx)
	return t, err
}

func GetAllTechnologies(ctx context.Context, client *ent.Client) ([]TechnologyJSON, error) {
	t, err := client.Technology.Query().All(ctx)
	return mapTechnologiesToJSON(t), err
}

func GetTechStacks(ctx context.Context, client *ent.Client) ([]*ent.TechStack, error) {
	t, err := client.TechStack.Query().All(ctx)
	return t, err
}

type TUpdateTechnology struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	Priority *int32    `json:"priority,omitempty"`
	Stack    *string   `json:"stack,omitempty"`
	Url      *string   `json:"url,omitempty"`
}

func UpdateTechnology(
	ctx context.Context,
	client *ent.Client,
	p TUpdateTechnology,
) (TechnologyJSON, error) {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t, err := client.Technology.UpdateOneID(p.Id).
		SetName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetStack(s).
		Save(ctx)
	return mapTechnologyEntToJSON(t), err
}

type TechnologyJSON struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	Stack    string    `json:"stack"`
	Priority int32     `json:"priority"`
	Url      string    `json:"url"`
}

func mapTechnologyEntToJSON(t *ent.Technology) TechnologyJSON {
	j := TechnologyJSON{
		Id:       t.ID,
		Name:     t.Name,
		Stack:    t.Edges.Stack.Stack,
		Priority: t.Priority,
		Url:      t.URL,
	}

	return j
}

func mapTechnologiesToJSON(tech []*ent.Technology) []TechnologyJSON {
	arr := []TechnologyJSON{}

	for _, t := range tech {
		j := mapTechnologyEntToJSON(t)
		arr = append(arr, j)
	}

	return arr
}
