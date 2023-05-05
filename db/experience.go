package db

import (
	"context"

	"kylejohnson-xyz/ent"

	"github.com/google/uuid"
)

type TAddExperience struct {
	Employer string  `json:"employer"`
	Time     *string `json:"time,omitempty"`
	Position string  `json:"position"`
	Active   *bool   `json:"active,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) (ExperienceJSON, error) {
	e, err := client.Experience.Create().
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return mapExperienceEntToJSON(e, ctx), err
}

type TAddExperienceDescription struct {
	ExperienceId  uuid.UUID `json:"experience_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

func AddExperienceDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddExperienceDescription,
) (ExperienceJSON, error) {
	e, err := client.Experience.UpdateOneID(p.ExperienceId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return mapExperienceEntToJSON(e, ctx), err
}

type TDeleteExperience struct {
	Id uuid.UUID `json:"id"`
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) error {
	err := client.Experience.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllExperiences(ctx context.Context, client *ent.Client) ([]ExperienceJSON, error) {
	items, err := client.Experience.Query().All(ctx)
	return mapExperienceEntSliceToJSON(items, ctx), err
}

type TUpdateExperience struct {
	Id       uuid.UUID `json:"id"`
	Employer string    `json:"employer"`
	Time     *string   `json:"time,omitempty"`
	Position string    `json:"position"`
	Active   *bool     `json:"active,omitempty"`
	Priority *int32    `json:"priority,omitempty"`
}

func UpdateExperience(
	ctx context.Context,
	client *ent.Client,
	p TUpdateExperience,
) (ExperienceJSON, error) {
	e, err := client.Experience.UpdateOneID(p.Id).
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return mapExperienceEntToJSON(e, ctx), err
}

type ExperienceJSON struct {
	Id           uuid.UUID         `json:"id"`
	Employer     string            `json:"employer"`
	Time         *string           `json:"time,omitempty"`
	Position     string            `json:"position"`
	Active       *bool             `json:"active,omitempty"`
	Priority     *int32            `json:"priority,omitempty"`
	Descriptions []DescriptionJSON `json:"descriptions"`
}

func mapExperienceEntToJSON(e *ent.Experience, ctx context.Context) ExperienceJSON {
	d := e.QueryDescriptions().AllX(ctx)
	r := ExperienceJSON{
		Id:           e.ID,
		Employer:     e.Employer,
		Time:         &e.Time,
		Position:     e.Position,
		Active:       &e.Active,
		Priority:     &e.Priority,
		Descriptions: mapDescriptionEntSliceToJSON(d),
	}
	return r
}

func mapExperienceEntSliceToJSON(e []*ent.Experience, ctx context.Context) []ExperienceJSON {
	a := []ExperienceJSON{}
	for _, x := range e {
		y := mapExperienceEntToJSON(x, ctx)
		a = append(a, y)
	}
	return a
}
