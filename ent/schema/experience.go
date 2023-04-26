package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Experience struct {
	ent.Schema
}

func (Experience) Fields() []ent.Field {
	return []ent.Field{
		field.String("employer"),
		field.String("position"),
		field.String("time").Optional(),
		field.Bool("active").Default(true),
		field.Int32("priority"),
	}
}

func (Experience) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("descriptions", Description.Type),
	}
}