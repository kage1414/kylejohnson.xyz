package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Invite struct {
	ent.Schema
}

func (Invite) Fields() []ent.Field {
	return []ent.Field{
		field.String("email"),
		field.String("key"),
		field.Bool("registered").Default(false),
	}
}