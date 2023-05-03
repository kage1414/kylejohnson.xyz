package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type Invite struct {
	ent.Schema
}

func (Invite) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("email").Unique(),
		field.String("key"),
		field.Bool("registered").Optional().Default(false),
	}
}

func (Invite) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).Ref("invite").Unique(),
	}
}
