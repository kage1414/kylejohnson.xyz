package db

import (
	"context"

	"kylejohnson-xyz/api_types"
	"kylejohnson-xyz/ent"

	"github.com/google/uuid"
)

type TAddEducation struct {
	School      string  `json:"school"`
	Time        *string `json:"time,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	Degree      *string `json:"degree,omitempty"`
	Active      *bool   `json:"active,omitempty"`
	Priority    *int32  `json:"priority,omitempty"`
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) (api_types.EducationJSON, error) {
	e, err := client.Education.Create().
		SetSchool(p.School).
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return mapEducationEntToJSON(e), err
}

type TDeleteEducation struct {
	Id uuid.UUID `json:"id"`
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) error {
	err := client.Education.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllEducations(ctx context.Context, client *ent.Client) ([]api_types.EducationJSON, error) {
	items, err := client.Education.Query().All(ctx)
	return mapEducationEntSliceToJSON(items), err
}

type TUpdateEducation struct {
	Id          uuid.UUID `json:"id"`
	School      string    `json:"school"`
	Time        *string   `json:"time,omitempty"`
	Certificate *string   `json:"certificate,omitempty"`
	Degree      *string   `json:"degree,omitempty"`
	Active      *bool     `json:"active,omitempty"`
	Priority    *int32    `json:"priority,omitempty"`
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) (api_types.EducationJSON, error) {
	e, err := client.Education.UpdateOneID(p.Id).
		SetSchool(p.School).
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return mapEducationEntToJSON(e), err
}

func mapEducationEntToJSON(e *ent.Education) api_types.EducationJSON {
	r := api_types.EducationJSON{
		Id:          e.ID,
		School:      e.School,
		Time:        &e.Time,
		Certificate: &e.Certificate,
		Degree:      &e.Degree,
		Active:      &e.Active,
		Priority:    &e.Priority,
	}
	return r
}

func mapEducationEntSliceToJSON(e []*ent.Education) []api_types.EducationJSON {
	a := []api_types.EducationJSON{}

	for _, x := range e {
		y := mapEducationEntToJSON(x)
		a = append(a, y)
	}
	return a
}
