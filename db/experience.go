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

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) (*ent.Experience, error) {
	e, err := client.Experience.Create().
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
}

type TAddExperienceDescription struct {
	ExperienceId  uuid.UUID `json:"experience_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

func AddExperienceDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddExperienceDescription,
) (*ent.Experience, error) {
	e, err := client.Experience.UpdateOneID(p.ExperienceId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return e, err
}

type TDeleteExperience struct {
	Id uuid.UUID `json:"id"`
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) error {
	err := client.Experience.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllExperiences(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
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
) (*ent.Experience, error) {
	e, err := client.Experience.UpdateOneID(p.Id).
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
}
