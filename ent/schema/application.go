package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type Application struct {
	ent.Schema
}

func (Application) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("name").Optional(),
		field.String("url").Optional(),
		field.Bool("active").Optional().Default(true),
		field.Int32("priority").Optional(),
	}
}

func (Application) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("descriptions", Description.Type),
		edge.To("technologies", Technology.Type),
	}
}
