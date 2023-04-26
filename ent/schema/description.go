package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Description struct {
	ent.Schema
}

func (Description) Fields() []ent.Field {
	return []ent.Field{
		field.String("description"),
		field.Bool("active").Default(true),
	}
}

func (Description) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("experience", Experience.Type).Ref("descriptions").Unique(),
		edge.From("application", Application.Type).Ref("descriptions").Unique(),
	}
}