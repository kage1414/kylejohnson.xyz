package db

type TUpdateUser struct {
	username string
	hash     string
	salt     string
	name     string
}

type TSetRegisteredInvite struct {
	key string
}

type TGetUserById struct {
	id int
}

type TGetUser struct {
	username string
}

type TGetInvite struct {
	key string
}

type TDeleteUser struct {
	username string
}

type TDeleteInvite struct {
	key string
}

type TCreateInvite struct {
	email string
	key   string
}

type TAddUser struct {
	username  string
	hash      string
	salt      string
	name      string
	email     string
	invite_id int
}

type TUpdateTechnology struct {
	id       int
	name     string
	priority int32
	stack    string
	url      string
}

type TDeleteTechnology struct {
	id int
}

type TAddTechnology struct {
	name     string
	url      string
	priority int32
	stack    string
}

type TUpdateExperience struct {
	id       int
	employer string
	time     string
	position string
	active   bool
	priority int32
}

type TDeleteExperience struct {
	id int
}

type TAddExperienceDescription struct {
	experience_id  int
	description_id int
}

type TAddExperience struct {
	employer string
	time     string
	position string
	active   bool
	priority int32
}

type TUpdateEducation struct {
	id          int
	school      string
	time        string
	certificate string
	degree      string
	active      bool
	priority    int32
}

type TDeleteEducation struct {
	id int
}

type TAddEducation struct {
	school      string
	time        string
	certificate string
	degree      string
	active      bool
	priority    int32
}

type TUpdateDescription struct {
	id          int
	description string
	priority    int32
}

type TGetDescription struct {
	id int
}

type TDeleteDescription struct {
	id int
}

type TAddDescription struct {
	description string
}

type TUpdateApplication struct {
	id       int
	name     string
	url      string
	priority int32
	active   bool
}

type TRemoveApplicationTechnology struct {
	id            int
	technology_id int
}

type TDeleteApplication struct {
	id int
}

type TAddApplicationTechnology struct {
	id   int
	name string
}

type TAddApplicationDescription struct {
	application_id int
	description_id int
}

type TAddApplication struct {
	Name     string `json:"name"`
	Url      string `json:"url"`
	Priority int32  `json:"priority"`
	Active   bool   `json:"active"`
}
