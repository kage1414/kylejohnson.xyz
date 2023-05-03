package db

import (
	"context"
	"html"
	"strings"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/invite"
	"kylejohnson-xyz/ent/techstack"
	"kylejohnson-xyz/ent/user"

	"entgo.io/ent/dialect/sql"
	"golang.org/x/crypto/bcrypt"
)

func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) *ent.Application {
	a := client.Application.Create().
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
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

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) error {
	err := client.Application.DeleteOneID(p.Id).Exec(ctx)
	return err
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
	a, _ := client.Application.UpdateOneID(p.Id).
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
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
		SetNillablePriority(p.Priority).
		SaveX(ctx)
	return d
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) *ent.Education {
	e := client.Education.Create().
		SetSchool(p.School).
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
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
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		SaveX(ctx)
	return e
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) *ent.Experience {
	e := client.Experience.Create().
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
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
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
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
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
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
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetStack(s).
		SaveX(ctx)
	return t
}

type BeforeSaveInput struct {
	Username *string `json:"username"`
	Password *string `json:"password"`
}

func beforeSave(p BeforeSaveInput) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(*p.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	password := string(hashedPassword)
	username := *p.Username

	trimmed := html.EscapeString(strings.TrimSpace(username))
	*p.Username = trimmed
	*p.Password = password
	return nil
}

func AddUser(ctx context.Context, client *ent.Client, p TAddUser) (*ent.User, error) {
	i, err := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldEmail, p.Email))
	}).First(ctx)
	if err != nil {
		return nil, err
	}
	hashErr := beforeSave(BeforeSaveInput{
		Username: &p.Username,
		Password: &p.Password,
	})
	if hashErr != nil {
		return nil, hashErr
	}
	u, err := client.User.Create().
		SetUsername(p.Username).
		SetPasswordHash(p.Password).
		SetNillableName(p.Name).
		SetEmail(p.Email).
		AddInvite(i).
		Save(ctx)
	return u, err
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
	u, _ := GetUser(ctx, client, TGetUser(p))
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

func GetUser(ctx context.Context, client *ent.Client, p TGetUser) (*ent.User, error) {
	u, err := client.User.Query().Where(user.UsernameContains(p.Username)).Only(ctx)
	return u, err
}

func GetUserById(ctx context.Context, client *ent.Client, p TGetUserById) (*ent.User, error) {
	u, err := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldID, p.Id))
	}).Only(ctx)
	return u, err
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).SaveX(ctx)
}

func UpdateUser(ctx context.Context, client *ent.Client, p TUpdateUser) error {
	u, err := GetUser(ctx, client, TGetUser{Username: p.Username})
	if err != nil {
		return err
	}
	hashErr := beforeSave(BeforeSaveInput{
		Username: &p.Username,
		Password: &p.Password,
	})
	if hashErr != nil {
		return hashErr
	}
	u.Update().
		SetPasswordHash(p.Password).
		// .SetHash(p.Hash)
		// .SetSalt(p.Salt)
		SetNillableName(p.Name).
		SaveX(ctx)
	return nil
}
