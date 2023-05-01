package db

type TUpdateUser struct {
	Username string  `json:"username"`
	Hash     string  `json:"hash"`
	Salt     string  `json:"salt"`
	Name     *string `json:"name,omitempty"`
}

type TSetRegisteredInvite struct {
	Key string `json:"key"`
}

type TGetUserById struct {
	Id int `json:"id"`
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
	Username string  `json:"username"`
	Hash     string  `json:"hash"`
	Salt     string  `json:"salt"`
	Name     *string `json:"name,omitempty"`
	Email    string  `json:"email"`
	InviteId int     `json:"invite_id"`
}

type TUpdateTechnology struct {
	Id       int     `json:"id"`
	Name     string  `json:"name"`
	Priority *int32  `json:"priority,omitempty"`
	Stack    *string `json:"stack,omitempty"`
	Url      *string `json:"url,omitempty"`
}

type TDeleteTechnology struct {
	Id int `json:"id"`
}

type TAddTechnology struct {
	Name     string  `json:"name"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Stack    *string `json:"stack,omitempty"`
}

type TUpdateExperience struct {
	Id       int     `json:"id"`
	Employer string  `json:"employer"`
	Time     *string `json:"time,omitempty"`
	Position string  `json:"position"`
	Active   *bool   `json:"active,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
}

type TDeleteExperience struct {
	Id int `json:"id"`
}

type TAddExperienceDescription struct {
	ExperienceId  int `json:"experience_id"`
	DescriptionId int `json:"description_id"`
}

type TAddExperience struct {
	Employer string  `json:"employer"`
	Time     *string `json:"time,omitempty"`
	Position string  `json:"position"`
	Active   *bool   `json:"active,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
}

type TUpdateEducation struct {
	Id          int     `json:"id"`
	School      string  `json:"school"`
	Time        *string `json:"time,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	Degree      *string `json:"degree,omitempty"`
	Active      *bool   `json:"active,omitempty"`
	Priority    *int32  `json:"priority,omitempty"`
}

type TDeleteEducation struct {
	Id int `json:"id"`
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
	Id          int    `json:"id"`
	Description string `json:"description"`
	Priority    *int32 `json:"priority,omitempty"`
}

type TGetDescription struct {
	Id int `json:"id"`
}

type TDeleteDescription struct {
	Id int `json:"id"`
}

type TAddDescription struct {
	Description string `json:"description"`
}

type TUpdateApplication struct {
	Id       int     `json:"id"`
	Name     *string `json:"name,omitempty"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Active   *bool   `json:"active,omitempty"`
}

type TRemoveApplicationTechnology struct {
	Id           int `json:"id"`
	TechnologyId int `json:"technology_id"`
}

type TDeleteApplication struct {
	Id int `json:"id"`
}

type TAddApplicationTechnology struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type TAddApplicationDescription struct {
	ApplicationId int `json:"application_id"`
	DescriptionId int `json:"description_id"`
}

type TAddApplication struct {
	Name     *string `json:"name,omitempty"`
	Url      *string `json:"url,omitempty"`
	Priority *int32  `json:"priority,omitempty"`
	Active   *bool   `json:"active,omitempty"`
}
