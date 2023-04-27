package db

import (
	"context"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/invite"
	"kylejohnson-xyz/ent/techstack"
	"kylejohnson-xyz/ent/user"

	"entgo.io/ent/dialect/sql"
)

func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) *ent.Application {
	a := client.Application.Create().SetName(p.Name).SetURL(p.Url).SetPriority(p.Priority).SetActive(p.Active).SaveX(ctx)
	return a
}

func AddApplicationDescription(ctx context.Context, client *ent.Client, p TAddApplicationDescription) *ent.Application {
	t := client.Application.UpdateOneID(p.application_id).AddDescriptionIDs(p.description_id).SaveX(ctx)
	return t
}

func AddApplicationTechnology(ctx context.Context, client *ent.Client, p TAddApplicationTechnology) *ent.Technology {
	t := client.Technology.Create().SetName(p.name).SaveX(ctx)
	client.Application.UpdateOneID(p.id).AddTechnologies(t).SaveX(ctx)
	return t
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) {
	client.Application.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().Order(ent.Asc(application.FieldPriority)).All(ctx)
	return items
}

func RemoveApplicationTechnology(ctx context.Context, client *ent.Client, p TRemoveApplicationTechnology) *ent.Application {
	a := client.Application.UpdateOneID(p.id).RemoveTechnologyIDs(p.technology_id).SaveX(ctx)
	return a
}

func UpdateApplication(ctx context.Context, client *ent.Client, p TUpdateApplication) *ent.Application {
	a := client.Application.UpdateOneID(p.id).SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetActive(p.active).SaveX(ctx)
	return a
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) *ent.Description {
	d := client.Description.Create().SetDescription(p.description).SaveX(ctx)
	return d
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) {
	client.Description.DeleteOneID(p.id).ExecX(ctx)
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) *ent.Description {
	d, _ := client.Description.Get(ctx, p.id)
	return d
}

func UpdateDescription(ctx context.Context, client *ent.Client, p TUpdateDescription) *ent.Description {
	d := client.Description.UpdateOneID(p.id).SetDescription(p.description).SetPriority(p.priority).SaveX(ctx)
	return d
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) *ent.Education {
	e := client.Education.Create().SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) {
	client.Education.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllEducations(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) *ent.Education {
	e := client.Education.UpdateOneID(p.id).SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) *ent.Experience {
	e := client.Experience.Create().SetEmployer(p.employer).SetNillableTime(&p.time).SetPosition(p.position).SetNillableActive(&p.active).SetPriority(p.priority).SaveX(ctx)
	return e
}

func AddExperienceDescription(ctx context.Context, client *ent.Client, p TAddExperienceDescription) *ent.Experience {
	e := client.Experience.UpdateOneID(p.experience_id).AddDescriptionIDs(p.description_id).SaveX(ctx)
	return e
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) {
	client.Experience.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllExperiences(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
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

func AddTechnology(ctx context.Context, client *ent.Client, p TAddTechnology) *ent.Technology {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.stack))
	}).FirstX(ctx)
	t := client.Technology.Create().SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetStack(s).SaveX(ctx)
	return t
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

func UpdateTechnology(ctx context.Context, client *ent.Client, p TUpdateTechnology) *ent.Technology {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.stack))
	}).FirstX(ctx)
	t := client.Technology.UpdateOneID(p.id).SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetStack(s).SaveX(ctx)
	return t
}

func AddUser(ctx context.Context, client *ent.Client, p TAddUser) *ent.User {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldID, p.invite_id))
	}).FirstX(ctx)
	u := client.User.Create().SetUsername(p.username).SetHash(p.hash).SetSalt(p.salt).SetName(p.name).SetEmail(p.email).AddInvite(i).SaveX(ctx)
	return u
}

func CreateInvite(ctx context.Context, client *ent.Client, p TCreateInvite) *ent.Invite {
	i := client.Invite.Create().SetEmail(p.email).SetKey(p.key).SaveX(ctx)
	return i
}

func DeleteInvite(ctx context.Context, client *ent.Client, p TDeleteInvite) {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.key))
	}).FirstX(ctx)
	client.Invite.DeleteOne(i).ExecX(ctx)
}

func DeleteUser(ctx context.Context, client *ent.Client, p TDeleteUser) {
	u := GetUser(ctx, client, TGetUser(p))
	client.User.DeleteOne(u).ExecX(ctx)
}

func GetAllUsers(ctx context.Context, client *ent.Client) []*ent.User {
	items, _ := client.User.Query().All(ctx)
	return items
}

func GetInvite(ctx context.Context, client *ent.Client, p TGetInvite) *ent.Invite {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.key))
	}).FirstX(ctx)
	return i
}

func GetUser(ctx context.Context, client *ent.Client, p TGetUser) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldUsername, p.username))
	}).FirstX(ctx)
	return u
}

func GetUserById(ctx context.Context, client *ent.Client, p TGetUserById) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldID, p.id))
	}).FirstX(ctx)
	return u
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).SaveX(ctx)
}

func UpdateUser(ctx context.Context, client *ent.Client, p TUpdateUser) {
	u := GetUser(ctx, client, TGetUser{username: p.username})
	u.Update().SetHash(p.hash).SetSalt(p.salt).SetName(p.name).SaveX(ctx)
}
