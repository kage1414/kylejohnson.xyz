package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type TechStack struct {
	ent.Schema
}

func (TechStack) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("stack").Unique(),
	}
}

func (TechStack) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("technology", Technology.Type),
	}
}
