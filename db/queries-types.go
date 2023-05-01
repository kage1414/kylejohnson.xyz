package db

type TUpdateUser struct {
	Username string `json:"username"`
	Hash     string `json:"hash"`
	Salt     string `json:"salt"`
	Name     string `json:"name"`
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
	Username string `json:"username"`
	Hash     string `json:"hash"`
	Salt     string `json:"salt"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	InviteId int    `json:"invite_id"`
}

type TUpdateTechnology struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Priority int32  `json:"priority"`
	Stack    string `json:"stack"`
	Url      string `json:"url"`
}

type TDeleteTechnology struct {
	Id int `json:"id"`
}

type TAddTechnology struct {
	Name     string `json:"name"`
	Url      string `json:"url"`
	Priority int32  `json:"priority"`
	Stack    string `json:"stack"`
}

type TUpdateExperience struct {
	Id       int    `json:"id"`
	Employer string `json:"employer"`
	Time     string `json:"time"`
	Position string `json:"position"`
	Active   bool   `json:"active"`
	Priority int32  `json:"priority"`
}

type TDeleteExperience struct {
	Id int `json:"id"`
}

type TAddExperienceDescription struct {
	ExperienceId  int `json:"experience_id"`
	DescriptionId int `json:"description_id"`
}

type TAddExperience struct {
	Employer string `json:"employer"`
	Time     string `json:"time"`
	Position string `json:"position"`
	Active   bool   `json:"active"`
	Priority int32  `json:"priority"`
}

type TUpdateEducation struct {
	Id          int    `json:"id"`
	School      string `json:"school"`
	Time        string `json:"time"`
	Certificate string `json:"certificate"`
	Degree      string `json:"degree"`
	Active      bool   `json:"active"`
	Priority    int32  `json:"priority"`
}

type TDeleteEducation struct {
	Id int `json:"id"`
}

type TAddEducation struct {
	School      string `json:"school"`
	Time        string `json:"time"`
	Certificate string `json:"certificate"`
	Degree      string `json:"degree"`
	Active      bool   `json:"active"`
	Priority    int32  `json:"priority"`
}

type TUpdateDescription struct {
	Id          int    `json:"id"`
	Description string `json:"description"`
	Priority    int32  `json:"priority"`
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
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Url      string `json:"url"`
	Priority int32  `json:"priority"`
	Active   bool   `json:"active"`
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
	Name     string `json:"name"`
	Url      string `json:"url"`
	Priority int32  `json:"priority"`
	Active   bool   `json:"active"`
}
