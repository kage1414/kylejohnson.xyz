package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type Technology struct {
	ent.Schema
}

func (Technology) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("name").Unique(),
		field.String("url").Optional(),
		field.Int32("priority").Optional(),
	}
}

func (Technology) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("application", Application.Type).Ref("technologies"),
		edge.From("stack", TechStack.Type).Ref("technology").Unique(),
	}
}
