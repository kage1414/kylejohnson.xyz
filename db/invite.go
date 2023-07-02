package db

import (
	"context"

	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/invite"

	"entgo.io/ent/dialect/sql"
)

type TSetRegisteredInvite struct {
	Key string `json:"key"`
}

func SetRegisteredInvite(ctx context.Context, client *ent.Client, p TSetRegisteredInvite) {
	i := GetInvite(ctx, client, TGetInvite(p))
	i.Update().SetRegistered(true).Save(ctx)
}

type TGetInvite struct {
	Key string `json:"key"`
}

func GetInvite(ctx context.Context, client *ent.Client, p TGetInvite) *ent.Invite {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.Key))
	}).FirstX(ctx)
	return i
}

type TCreateInvite struct {
	Email string `json:"email"`
	Key   string `json:"key"`
}

func CreateInvite(ctx context.Context, client *ent.Client, p TCreateInvite) (*ent.Invite, error) {
	i, err := client.Invite.Create().SetEmail(p.Email).SetKey(p.Key).Save(ctx)
	return i, err
}

type TDeleteInvite struct {
	Key string `json:"key"`
}

func DeleteInvite(ctx context.Context, client *ent.Client, p TDeleteInvite) error {
	i := client.Invite.Query().Where(func(s *sql.Selector) {
		s.Where(sql.InValues(invite.FieldKey, p.Key))
	}).FirstX(ctx)
	err := client.Invite.DeleteOne(i).Exec(ctx)
	return err
}
