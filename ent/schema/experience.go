package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type Experience struct {
	ent.Schema
}

func (Experience) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("employer"),
		field.String("position"),
		field.String("time").Optional(),
		field.Bool("active").Optional().Default(true),
		field.Int32("priority").Optional(),
	}
}

func (Experience) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("descriptions", Description.Type),
	}
}
