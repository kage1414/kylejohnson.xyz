package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

type Description struct {
	ent.Schema
}

func (Description) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("description"),
		field.Bool("active").Optional().Default(true),
		field.Int32("priority").Optional(),
	}
}

func (Description) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("experience", Experience.Type).Ref("descriptions").Unique(),
		edge.From("application", Application.Type).Ref("descriptions").Unique(),
	}
}
