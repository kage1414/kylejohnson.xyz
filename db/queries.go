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
	a := client.Application.Create().
		SetName(p.Name).
		SetURL(p.Url).
		SetPriority(p.Priority).
		SetActive(p.Active).
		SaveX(ctx)
	return a
}

func AddApplicationDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationDescription,
) *ent.Application {
	t := client.Application.UpdateOneID(p.ApplicationId).
		AddDescriptionIDs(p.DescriptionId).
		SaveX(ctx)
	return t
}

func AddApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationTechnology,
) *ent.Technology {
	t := client.Technology.Create().SetName(p.Name).SaveX(ctx)
	client.Application.UpdateOneID(p.Id).AddTechnologies(t).SaveX(ctx)
	return t
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) {
	client.Application.DeleteOneID(p.Id).ExecX(ctx)
}

func GetAllApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().Order(ent.Asc(application.FieldPriority)).All(ctx)
	return items
}

func RemoveApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TRemoveApplicationTechnology,
) *ent.Application {
	a := client.Application.UpdateOneID(p.Id).RemoveTechnologyIDs(p.TechnologyId).SaveX(ctx)
	return a
}

func UpdateApplication(
	ctx context.Context,
	client *ent.Client,
	p TUpdateApplication,
) *ent.Application {
	a := client.Application.UpdateOneID(p.Id).
		SetName(p.Name).
		SetURL(p.Url).
		SetPriority(p.Priority).
		SetActive(p.Active).
		SaveX(ctx)
	return a
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) *ent.Description {
	d := client.Description.Create().SetDescription(p.Description).SaveX(ctx)
	return d
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) {
	client.Description.DeleteOneID(p.Id).ExecX(ctx)
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) *ent.Description {
	d, _ := client.Description.Get(ctx, p.Id)
	return d
}

func UpdateDescription(
	ctx context.Context,
	client *ent.Client,
	p TUpdateDescription,
) *ent.Description {
	d := client.Description.UpdateOneID(p.Id).
		SetDescription(p.Description).
		SetPriority(p.Priority).
		SaveX(ctx)
	return d
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) *ent.Education {
	e := client.Education.Create().
		SetSchool(p.School).
		SetNillableTime(&p.Time).
		SetNillableCertificate(&p.Certificate).
		SetNillableDegree(&p.Degree).
		SetNillableActive(&p.Active).
		SetNillablePriority(&p.Priority).
		SaveX(ctx)
	return e
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) {
	client.Education.DeleteOneID(p.Id).ExecX(ctx)
}

func GetAllEducations(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) *ent.Education {
	e := client.Education.UpdateOneID(p.Id).
		SetSchool(p.School).
		SetNillableTime(&p.Time).
		SetNillableCertificate(&p.Certificate).
		SetNillableDegree(&p.Degree).
		SetNillableActive(&p.Active).
		SetNillablePriority(&p.Priority).
		SaveX(ctx)
	return e
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) *ent.Experience {
	e := client.Experience.Create().
		SetEmployer(p.Employer).
		SetNillableTime(&p.Time).
		SetPosition(p.Position).
		SetNillableActive(&p.Active).
		SetPriority(p.Priority).
		SaveX(ctx)
	return e
}

func AddExperienceDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddExperienceDescription,
) *ent.Experience {
	e := client.Experience.UpdateOneID(p.ExperienceId).
		AddDescriptionIDs(p.DescriptionId).
		SaveX(ctx)
	return e
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) {
	client.Experience.DeleteOneID(p.Id).ExecX(ctx)
}

func GetAllExperiences(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
}

func UpdateExperience(
	ctx context.Context,
	client *ent.Client,
	p TUpdateExperience,
) *ent.Experience {
	e := client.Experience.UpdateOneID(p.Id).
		SetEmployer(p.Employer).
		SetNillableTime(&p.Time).
		SetPosition(p.Position).
		SetNillableActive(&p.Active).
		SetPriority(p.Priority).
		SaveX(ctx)
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
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t := client.Technology.Create().
		SetName(p.Name).
		SetURL(p.Url).
		SetPriority(p.Priority).
		SetStack(s).
		SaveX(ctx)
	return t
}

func DeleteTechnology(ctx context.Context, client *ent.Client, p TDeleteTechnology) {
	client.Technology.DeleteOneID(p.Id).ExecX(ctx)
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

func UpdateTechnology(
	ctx context.Context,
	client *ent.Client,
	p TUpdateTechnology,
) *ent.Technology {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t := client.Technology.UpdateOneID(p.Id).
		SetName(p.Name).
		SetURL(p.Url).
		SetPriority(p.Priority).
		SetStack(s).
		SaveX(ctx)
	return t
}

func AddUser(ctx context.Context, client *ent.Client, p TAddUser) *ent.User {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldID, p.InviteId))
	}).FirstX(ctx)
	u := client.User.Create().
		SetUsername(p.Username).
		SetHash(p.Hash).
		SetSalt(p.Salt).
		SetName(p.Name).
		SetEmail(p.Email).
		AddInvite(i).
		SaveX(ctx)
	return u
}

func CreateInvite(ctx context.Context, client *ent.Client, p TCreateInvite) *ent.Invite {
	i := client.Invite.Create().SetEmail(p.Email).SetKey(p.Key).SaveX(ctx)
	return i
}

func DeleteInvite(ctx context.Context, client *ent.Client, p TDeleteInvite) {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.Key))
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
		s.Where(sql.InValues(invite.FieldKey, p.Key))
	}).FirstX(ctx)
	return i
}

func GetUser(ctx context.Context, client *ent.Client, p TGetUser) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldUsername, p.Username))
	}).FirstX(ctx)
	return u
}

func GetUserById(ctx context.Context, client *ent.Client, p TGetUserById) *ent.User {
	u := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldID, p.Id))
	}).FirstX(ctx)
	return u
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).SaveX(ctx)
}

func UpdateUser(ctx context.Context, client *ent.Client, p TUpdateUser) {
	u := GetUser(ctx, client, TGetUser{Username: p.Username})
	u.Update().SetHash(p.Hash).SetSalt(p.Salt).SetName(p.Name).SaveX(ctx)
}
