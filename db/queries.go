package db

import (
	"context"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/invite"
	"kylejohnson-xyz/ent/techstack"
	"kylejohnson-xyz/ent/user"

	"entgo.io/ent/dialect/sql"
)

type TAddApplication struct {
	name string
	url string
	priority int32
	active bool
}
func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) *ent.Application {
	a := client.Application.Create().SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetActive(p.active).SaveX(ctx)
	return a
}

type TAddApplicationDescription struct {
	application_id int
	description_id int
}

func AddApplicationDescription(ctx context.Context, client *ent.Client, p TAddApplicationDescription) *ent.Application {
	t := client.Application.UpdateOneID(p.application_id).AddDescriptionIDs(p.description_id).SaveX(ctx)
	return t
}

type TAddApplicationTechnology struct {
	id int
	name string
}

func AddApplicationTechnology(ctx context.Context, client *ent.Client, p TAddApplicationTechnology) *ent.Technology {
	t := client.Technology.Create().SetName(p.name).SaveX(ctx)
	client.Application.UpdateOneID(p.id).AddTechnologies(t).SaveX(ctx)
	return t
}

type TDeleteApplication struct {
	id int
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) {
	 client.Application.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().All(ctx)
	return items
}

type TRemoveApplicationTechnology struct {
	id int
	technology_id int
}

func RemoveApplicationTechnology(ctx context.Context, client *ent.Client, p TRemoveApplicationTechnology) *ent.Application {
	a := client.Application.UpdateOneID(p.id).RemoveTechnologyIDs(p.technology_id).SaveX(ctx)
	return a;
}

type TUpdateApplication struct {
	id int
	name string
	url string
	priority int32
	active bool
}

func UpdateApplication(ctx context.Context, client *ent.Client, p TUpdateApplication) *ent.Application {
	a := client.Application.UpdateOneID(p.id).SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetActive(p.active).SaveX(ctx)
	return a
}

type TAddDescription struct {
	description string
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) *ent.Description {
	d := client.Description.Create().SetDescription(p.description).SaveX(ctx)
	return d
}

type TDeleteDescription struct {
	id int
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) {
	client.Description.DeleteOneID(p.id).ExecX(ctx)
}

type TGetDescription struct {
	id int
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) *ent.Description {
	d, _ := client.Description.Get(ctx, p.id)
	return d
}

type TUpdateDescription struct {
	id int
	description string
	priority int32
}

func UpdateDescription(ctx context.Context, client *ent.Client, p TUpdateDescription) *ent.Description {
	d := client.Description.UpdateOneID(p.id).SetDescription(p.description).SetPriority(p.priority).SaveX(ctx)
	return d
}

type TAddEducation struct {
	school string
	time string
	certificate string
	degree string
	active bool
	priority int32
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) *ent.Education {
	e := client.Education.Create().SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}

type TDeleteEducation struct {
	id int
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) {
	client.Education.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllEducations(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

type TUpdateEducation struct {
	id int
	school string
	time string
	certificate string
	degree string
	active bool
	priority int32
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) *ent.Education {
	e := client.Education.UpdateOneID(p.id).SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}

type TAddExperience struct {
	employer string
	time string
	position string
	active bool
	priority int32
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) *ent.Experience {
	e := client.Experience.Create().SetEmployer(p.employer).SetNillableTime(&p.time).SetPosition(p.position).SetNillableActive(&p.active).SetPriority(p.priority).SaveX(ctx)
	return e
}

type TAddExperienceDescription struct {
	experience_id int
	description_id int
}

func AddExperienceDescription(ctx context.Context, client *ent.Client, p TAddExperienceDescription) *ent.Experience {
	e := client.Experience.UpdateOneID(p.experience_id).AddDescriptionIDs(p.description_id).SaveX(ctx)
	return e
}

type TDeleteExperience struct {
	id int
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) {
	client.Experience.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllExperiences(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
}

type TUpdateExperience struct {
	id int
	employer string
	time string
	position string
	active bool
	priority int32
}

func UpdateExperience(ctx context.Context, client *ent.Client, p TUpdateExperience) *ent.Experience {
	e := client.Experience.UpdateOneID(p.id).SetEmployer(p.employer).SetNillableTime(&p.time).SetPosition(p.position).SetNillableActive(&p.active).SetPriority(p.priority).SaveX(ctx)
	return e
}

func SnapshotApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().All(ctx)
	return items
}

func SnapshotEducation(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

func SnapshotExperience(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
}

func SnapshotTechnologies(ctx context.Context, client *ent.Client) []*ent.Technology {
	items, _ := client.Technology.Query().All(ctx)
	return items
}

type TAddTechnology struct {
	name string
	url string
	priority int32
	stack string
}

func AddTechnology(ctx context.Context, client *ent.Client, p TAddTechnology) *ent.Technology {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.stack))
	}).FirstX(ctx)
	t := client.Technology.Create().SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetStack(s).SaveX(ctx)
	return t
}

type TDeleteTechnology struct {
	id int
}

func DeleteTechnology(ctx context.Context, client *ent.Client, p TDeleteTechnology) {
	client.Technology.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllTechnicalSkills(ctx context.Context, client *ent.Client) []*ent.TechStack {
	t := client.TechStack.Query().AllX(ctx)
	return t
}

func GetAllTechnologies(ctx context.Context, client *ent.Client) []*ent.Technology {
	t := client.Technology.Query().AllX(ctx)
	return t
}

func GetTechStacks(ctx context.Context, client *ent.Client) []*ent.TechStack {
	t := client.TechStack.Query().AllX(ctx)
	return t
}

type TUpdateTechnology struct {
	id int
	name string
	priority int32
	stack string
	url string
}

func UpdateTechnology(ctx context.Context, client *ent.Client, p TUpdateTechnology) *ent.Technology {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.stack))
	}).FirstX(ctx)
	t := client.Technology.UpdateOneID(p.id).SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetStack(s).SaveX(ctx)
	return t
}

type TAddUser struct {
	username string
	hash string
	salt string
	name string
	email string
	invite_id int
}

func AddUser(ctx context.Context, client *ent.Client, p TAddUser) *ent.User {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldID, p.invite_id))
	}).FirstX(ctx)
	u := client.User.Create().SetUsername(p.username).SetHash(p.hash).SetSalt(p.salt).SetName(p.name).SetEmail(p.email).AddInvite(i).SaveX(ctx)
	return u
}

type TCreateInvite struct {
	email string
	key string
}

func CreateInvite(ctx context.Context, client *ent.Client, p TCreateInvite) *ent.Invite {
	i := client.Invite.Create().SetEmail(p.email).SetKey(p.key).SaveX(ctx)
	return i
}

type TDeleteInvite struct {
	key string
}

func DeleteInvite(ctx context.Context, client *ent.Client, p TDeleteInvite) {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.key))
	}).FirstX(ctx)
	client.Invite.DeleteOne(i).ExecX(ctx)
}

type TDeleteUser struct {
	username string
}

func DeleteUser(ctx context.Context, client *ent.Client, p TDeleteUser) {
	u := GetUser(ctx, client, TGetUser(p))
	client.User.DeleteOne(u).ExecX(ctx)
}

func GetAllUsers(ctx context.Context, client *ent.Client) []*ent.User {
	items, _ := client.User.Query().All(ctx)
	return items
}

type TGetInvite struct {
	key string
}

func GetInvite(ctx context.Context, client *ent.Client, p TGetInvite) *ent.Invite {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.key))
	}).FirstX(ctx)
	return i
}

type TGetUser struct {
	username string
}

func GetUser(ctx context.Context, client *ent.Client, p TGetUser) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldUsername, p.username))
	}).FirstX(ctx)
	return u
}

type TGetUserById struct {
	id int
}

func GetUserById(ctx context.Context, client *ent.Client, p TGetUserById) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldID, p.id))
	}).FirstX(ctx)
	return u
}

type TSetRegisteredInvite struct {
	key string
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).SaveX(ctx)
}

type TUpdateUser struct {
	username string
	hash string
	salt string
	name string
}

func UpdateUser(ctx context.Context, client *ent.Client, p TUpdateUser) {
	u := GetUser(ctx, client, TGetUser{username: p.username})
	u.Update().SetHash(p.hash).SetSalt(p.salt).SetName(p.name).SaveX(ctx)
}