package db

import "github.com/google/uuid"

type TUpdateUser struct {
	Username string `json:"username"`
	Password string `json:"password"`
	// Hash     string  `json:"hash"`
	// Salt     string  `json:"salt"`
	Name *string `json:"name,omitempty"`
}

type TSetRegisteredInvite struct {
	Key string `json:"key"`
}

type TGetUserById struct {
	Id uuid.UUID `json:"id"`
}

type TGetUser struct {
	Username string `json:"username"`
}

type TGetInvite struct {
	Key string `json:"key"`
}

type TDeleteUser struct {
	Username string `json:"username"`
}

type TDeleteInvite struct {
	Key string `json:"key"`
}

type TCreateInvite struct {
	Email string `json:"email"`
	Key   string `json:"key"`
}

type TAddUser struct {
	Username string `json:"username"`
	Password string `json:"password"`
	// Hash     string    `json:"hash"`
	// Salt     string    `json:"salt"`
	Name  *string `json:"name,omitempty"`
	Email string  `json:"email"`
}

type TUpdateTechnology struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	Priority *int32    `json:"priority,omitempty"`
	Stack    *string   `json:"stack,omitempty"`
	Url      *string   `json:"url,omitempty"`
}

type TDeleteTechnology struct {
	Id uuid.UUID `json:"id"`
}

type TAddTechnology struct {
	Name     string  `json:"name"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Stack    *string `json:"stack,omitempty"`
}

type TUpdateExperience struct {
	Id       uuid.UUID `json:"id"`
	Employer string    `json:"employer"`
	Time     *string   `json:"time,omitempty"`
	Position string    `json:"position"`
	Active   *bool     `json:"active,omitempty"`
	Priority *int32    `json:"priority,omitempty"`
}

type TDeleteExperience struct {
	Id uuid.UUID `json:"id"`
}

type TAddExperienceDescription struct {
	ExperienceId  uuid.UUID `json:"experience_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

type TAddExperience struct {
	Employer string  `json:"employer"`
	Time     *string `json:"time,omitempty"`
	Position string  `json:"position"`
	Active   *bool   `json:"active,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
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

type TDeleteEducation struct {
	Id uuid.UUID `json:"id"`
}

type TAddEducation struct {
	School      string  `json:"school"`
	Time        *string `json:"time,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	Degree      *string `json:"degree,omitempty"`
	Active      *bool   `json:"active,omitempty"`
	Priority    *int32  `json:"priority,omitempty"`
}

type TUpdateDescription struct {
	Id          uuid.UUID `json:"id"`
	Description string    `json:"description"`
	Priority    *int32    `json:"priority,omitempty"`
}

type TGetDescription struct {
	Id uuid.UUID `json:"id"`
}

type TDeleteDescription struct {
	Id uuid.UUID `json:"id"`
}

type TAddDescription struct {
	Description string `json:"description"`
}

type TUpdateApplication struct {
	Id       uuid.UUID `json:"id"`
	Name     *string   `json:"name,omitempty"`
	Url      *string   `json:"url,omitempty"`
	Priority *int32    `json:"priority,omitempty"`
	Active   *bool     `json:"active,omitempty"`
}

type TRemoveApplicationTechnology struct {
	Id           uuid.UUID `json:"id"`
	TechnologyId uuid.UUID `json:"technology_id"`
}

type TDeleteApplication struct {
	Id uuid.UUID `json:"id"`
}

type TAddApplicationTechnology struct {
	Id   uuid.UUID `json:"id"`
	Name string    `json:"name"`
}

type TAddApplicationDescription struct {
	ApplicationId uuid.UUID `json:"application_id"`
	DescriptionId uuid.UUID `json:"description_id"`
}

type TAddApplication struct {
	Name     *string `json:"name,omitempty"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Active   *bool   `json:"active,omitempty"`
}
