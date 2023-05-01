package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Education struct {
	ent.Schema
}

func (Education) Fields() []ent.Field {
	return []ent.Field{
		field.String("school"),
		field.String("time").Optional(),
		field.String("certificate").Optional(),
		field.String("degree").Optional(),
		field.Bool("active").Optional().Default(true),
		field.Int32("priority").Optional(),
	}
}
