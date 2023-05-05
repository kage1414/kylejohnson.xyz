package api_types

import "github.com/google/uuid"

type ApplicationJSON struct {
	Id           uuid.UUID         `json:"id"`
	Name         string            `json:"name"`
	Url          string            `json:"url"`
	Active       bool              `json:"active"`
	Descriptions []DescriptionJSON `json:"descriptions"`
	Technologies []TechnologyJSON  `json:"technologies"`
	Priority     int32             `json:"priority"`
}

type DescriptionJSON struct {
	Id          uuid.UUID `json:"id"`
	Description string    `json:"description"`
	Active      bool      `json:"active"`
	Priority    int32     `json:"priority"`
}

type EducationJSON struct {
	Id          uuid.UUID `json:"id"`
	School      string    `json:"school"`
	Time        *string   `json:"time,omitempty"`
	Certificate *string   `json:"certificate,omitempty"`
	Degree      *string   `json:"degree,omitempty"`
	Active      *bool     `json:"active,omitempty"`
	Priority    *int32    `json:"priority,omitempty"`
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

type TechnologyJSON struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	Stack    string    `json:"stack"`
	Priority int32     `json:"priority"`
	Url      string    `json:"url"`
}
