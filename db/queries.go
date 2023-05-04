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

func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) (*ent.Application, error) {
	a, err := client.Application.Create().
		SetNillableName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetNillableActive(p.Active).
		Save(ctx)
	return a, err
}

func AddApplicationDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationDescription,
) (*ent.Application, error) {
	t, err := client.Application.UpdateOneID(p.ApplicationId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return t, err
}

func AddApplicationTechnology(
	ctx context.Context,
	client *ent.Client,
	p TAddApplicationTechnology,
) (*ent.Technology, error) {
	t, err := client.Technology.Create().SetName(p.Name).Save(ctx)
	client.Application.UpdateOneID(p.Id).AddTechnologies(t).Save(ctx)
	return t, err
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
) (*ent.Application, error) {
	a, err := client.Application.UpdateOneID(p.Id).RemoveTechnologyIDs(p.TechnologyId).Save(ctx)
	return a, err
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

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) (*ent.Description, error) {
	d, err := client.Description.Create().SetDescription(p.Description).Save(ctx)
	return d, err
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) error {
	err := client.Description.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) (*ent.Description, error) {
	d, err := client.Description.Get(ctx, p.Id)
	return d, err
}

func UpdateDescription(
	ctx context.Context,
	client *ent.Client,
	p TUpdateDescription,
) (*ent.Description, error) {
	d, err := client.Description.UpdateOneID(p.Id).
		SetDescription(p.Description).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return d, err
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) (*ent.Education, error) {
	e, err := client.Education.Create().
		SetSchool(p.School).
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) error {
	err := client.Education.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllEducations(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) (*ent.Education, error) {
	e, err := client.Education.UpdateOneID(p.Id).
		SetSchool(p.School).
		SetNillableTime(p.Time).
		SetNillableCertificate(p.Certificate).
		SetNillableDegree(p.Degree).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
}

func AddExperience(ctx context.Context, client *ent.Client, p TAddExperience) (*ent.Experience, error) {
	e, err := client.Experience.Create().
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
}

func AddExperienceDescription(
	ctx context.Context,
	client *ent.Client,
	p TAddExperienceDescription,
) (*ent.Experience, error) {
	e, err := client.Experience.UpdateOneID(p.ExperienceId).
		AddDescriptionIDs(p.DescriptionId).
		Save(ctx)
	return e, err
}

func DeleteExperience(ctx context.Context, client *ent.Client, p TDeleteExperience) error {
	err := client.Experience.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllExperiences(ctx context.Context, client *ent.Client) []*ent.Experience {
	items, _ := client.Experience.Query().All(ctx)
	return items
}

func UpdateExperience(
	ctx context.Context,
	client *ent.Client,
	p TUpdateExperience,
) (*ent.Experience, error) {
	e, err := client.Experience.UpdateOneID(p.Id).
		SetEmployer(p.Employer).
		SetNillableTime(p.Time).
		SetPosition(p.Position).
		SetNillableActive(p.Active).
		SetNillablePriority(p.Priority).
		Save(ctx)
	return e, err
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

func AddTechnology(ctx context.Context, client *ent.Client, p TAddTechnology) (*ent.Technology, error) {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t, err := client.Technology.Create().
		SetName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetStack(s).
		Save(ctx)
	return t, err
}

func DeleteTechnology(ctx context.Context, client *ent.Client, p TDeleteTechnology) error {
	err := client.Technology.DeleteOneID(p.Id).Exec(ctx)
	return err
}

func GetAllTechnicalSkills(ctx context.Context, client *ent.Client) ([]*ent.TechStack, error) {
	t, err := client.TechStack.Query().All(ctx)
	return t, err
}

func GetAllTechnologies(ctx context.Context, client *ent.Client) ([]*ent.Technology, error) {
	t, err := client.Technology.Query().All(ctx)
	return t, err
}

func GetTechStacks(ctx context.Context, client *ent.Client) ([]*ent.TechStack, error) {
	t, err := client.TechStack.Query().All(ctx)
	return t, err
}

func UpdateTechnology(
	ctx context.Context,
	client *ent.Client,
	p TUpdateTechnology,
) (*ent.Technology, error) {
	s := client.TechStack.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(techstack.FieldStack, p.Stack))
	}).FirstX(ctx)
	t, err := client.Technology.UpdateOneID(p.Id).
		SetName(p.Name).
		SetNillableURL(p.Url).
		SetNillablePriority(p.Priority).
		SetStack(s).
		Save(ctx)
	return t, err
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

func CreateInvite(ctx context.Context, client *ent.Client, p TCreateInvite) (*ent.Invite, error) {
	i, err := client.Invite.Create().SetEmail(p.Email).SetKey(p.Key).Save(ctx)
	return i, err
}

func DeleteInvite(ctx context.Context, client *ent.Client, p TDeleteInvite) error {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.Key))
	}).FirstX(ctx)
	err := client.Invite.DeleteOne(i).Exec(ctx)
	return err
}

func DeleteUser(ctx context.Context, client *ent.Client, p TDeleteUser) error {
	u, _ := GetUser(ctx, client, TGetUser(p))
	err := client.User.DeleteOne(u).Exec(ctx)
	return err
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

func PrepareGive(u *ent.User) {
	u.PasswordHash = ""
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).Save(ctx)
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
		Save(ctx)
	return nil
}
