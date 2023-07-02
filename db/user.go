package db

import (
	"context"
	"html"
	"strings"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/invite"
	"kylejohnson-xyz/ent/user"

	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

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

type TAddUser struct {
	Username string  `json:"username"`
	Password string  `json:"password"`
	Name     *string `json:"name,omitempty"`
	Email    string  `json:"email"`
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

type TDeleteUser struct {
	Username string `json:"username"`
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

type TGetUser struct {
	Username string `json:"username"`
}

func GetUser(ctx context.Context, client *ent.Client, p TGetUser) (*ent.User, error) {
	u, err := client.User.Query().Where(user.UsernameContains(p.Username)).Only(ctx)
	return u, err
}

type TGetUserById struct {
	Id uuid.UUID `json:"id"`
}

func GetUserById(ctx context.Context, client *ent.Client, p TGetUserById) (*ent.User, error) {
	u, err := client.User.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(user.FieldID, p.Id))
	}).Only(ctx)
	prepareGive(u)
	return u, err
}

func prepareGive(u *ent.User) {
	u.PasswordHash = ""
}

type TUpdateUser struct {
	Username string  `json:"username"`
	Password string  `json:"password"`
	Name     *string `json:"name,omitempty"`
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
		SetNillableName(p.Name).
		Save(ctx)
	return nil
}
