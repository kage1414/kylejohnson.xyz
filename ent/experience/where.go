// Code generated by ent, DO NOT EDIT.

package experience

import (
	"kylejohnson-xyz/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

// ID filters vertices based on their ID field.
func ID(id int) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int) predicate.Experience {
	return predicate.Experience(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int) predicate.Experience {
	return predicate.Experience(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int) predicate.Experience {
	return predicate.Experience(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int) predicate.Experience {
	return predicate.Experience(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int) predicate.Experience {
	return predicate.Experience(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int) predicate.Experience {
	return predicate.Experience(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int) predicate.Experience {
	return predicate.Experience(sql.FieldLTE(FieldID, id))
}

// Employer applies equality check predicate on the "employer" field. It's identical to EmployerEQ.
func Employer(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldEmployer, v))
}

// Position applies equality check predicate on the "position" field. It's identical to PositionEQ.
func Position(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldPosition, v))
}

// Time applies equality check predicate on the "time" field. It's identical to TimeEQ.
func Time(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldTime, v))
}

// Active applies equality check predicate on the "active" field. It's identical to ActiveEQ.
func Active(v bool) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldActive, v))
}

// EmployerEQ applies the EQ predicate on the "employer" field.
func EmployerEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldEmployer, v))
}

// EmployerNEQ applies the NEQ predicate on the "employer" field.
func EmployerNEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldNEQ(FieldEmployer, v))
}

// EmployerIn applies the In predicate on the "employer" field.
func EmployerIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldIn(FieldEmployer, vs...))
}

// EmployerNotIn applies the NotIn predicate on the "employer" field.
func EmployerNotIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldNotIn(FieldEmployer, vs...))
}

// EmployerGT applies the GT predicate on the "employer" field.
func EmployerGT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGT(FieldEmployer, v))
}

// EmployerGTE applies the GTE predicate on the "employer" field.
func EmployerGTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGTE(FieldEmployer, v))
}

// EmployerLT applies the LT predicate on the "employer" field.
func EmployerLT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLT(FieldEmployer, v))
}

// EmployerLTE applies the LTE predicate on the "employer" field.
func EmployerLTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLTE(FieldEmployer, v))
}

// EmployerContains applies the Contains predicate on the "employer" field.
func EmployerContains(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContains(FieldEmployer, v))
}

// EmployerHasPrefix applies the HasPrefix predicate on the "employer" field.
func EmployerHasPrefix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasPrefix(FieldEmployer, v))
}

// EmployerHasSuffix applies the HasSuffix predicate on the "employer" field.
func EmployerHasSuffix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasSuffix(FieldEmployer, v))
}

// EmployerEqualFold applies the EqualFold predicate on the "employer" field.
func EmployerEqualFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEqualFold(FieldEmployer, v))
}

// EmployerContainsFold applies the ContainsFold predicate on the "employer" field.
func EmployerContainsFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContainsFold(FieldEmployer, v))
}

// PositionEQ applies the EQ predicate on the "position" field.
func PositionEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldPosition, v))
}

// PositionNEQ applies the NEQ predicate on the "position" field.
func PositionNEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldNEQ(FieldPosition, v))
}

// PositionIn applies the In predicate on the "position" field.
func PositionIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldIn(FieldPosition, vs...))
}

// PositionNotIn applies the NotIn predicate on the "position" field.
func PositionNotIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldNotIn(FieldPosition, vs...))
}

// PositionGT applies the GT predicate on the "position" field.
func PositionGT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGT(FieldPosition, v))
}

// PositionGTE applies the GTE predicate on the "position" field.
func PositionGTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGTE(FieldPosition, v))
}

// PositionLT applies the LT predicate on the "position" field.
func PositionLT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLT(FieldPosition, v))
}

// PositionLTE applies the LTE predicate on the "position" field.
func PositionLTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLTE(FieldPosition, v))
}

// PositionContains applies the Contains predicate on the "position" field.
func PositionContains(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContains(FieldPosition, v))
}

// PositionHasPrefix applies the HasPrefix predicate on the "position" field.
func PositionHasPrefix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasPrefix(FieldPosition, v))
}

// PositionHasSuffix applies the HasSuffix predicate on the "position" field.
func PositionHasSuffix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasSuffix(FieldPosition, v))
}

// PositionEqualFold applies the EqualFold predicate on the "position" field.
func PositionEqualFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEqualFold(FieldPosition, v))
}

// PositionContainsFold applies the ContainsFold predicate on the "position" field.
func PositionContainsFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContainsFold(FieldPosition, v))
}

// TimeEQ applies the EQ predicate on the "time" field.
func TimeEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldTime, v))
}

// TimeNEQ applies the NEQ predicate on the "time" field.
func TimeNEQ(v string) predicate.Experience {
	return predicate.Experience(sql.FieldNEQ(FieldTime, v))
}

// TimeIn applies the In predicate on the "time" field.
func TimeIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldIn(FieldTime, vs...))
}

// TimeNotIn applies the NotIn predicate on the "time" field.
func TimeNotIn(vs ...string) predicate.Experience {
	return predicate.Experience(sql.FieldNotIn(FieldTime, vs...))
}

// TimeGT applies the GT predicate on the "time" field.
func TimeGT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGT(FieldTime, v))
}

// TimeGTE applies the GTE predicate on the "time" field.
func TimeGTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldGTE(FieldTime, v))
}

// TimeLT applies the LT predicate on the "time" field.
func TimeLT(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLT(FieldTime, v))
}

// TimeLTE applies the LTE predicate on the "time" field.
func TimeLTE(v string) predicate.Experience {
	return predicate.Experience(sql.FieldLTE(FieldTime, v))
}

// TimeContains applies the Contains predicate on the "time" field.
func TimeContains(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContains(FieldTime, v))
}

// TimeHasPrefix applies the HasPrefix predicate on the "time" field.
func TimeHasPrefix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasPrefix(FieldTime, v))
}

// TimeHasSuffix applies the HasSuffix predicate on the "time" field.
func TimeHasSuffix(v string) predicate.Experience {
	return predicate.Experience(sql.FieldHasSuffix(FieldTime, v))
}

// TimeIsNil applies the IsNil predicate on the "time" field.
func TimeIsNil() predicate.Experience {
	return predicate.Experience(sql.FieldIsNull(FieldTime))
}

// TimeNotNil applies the NotNil predicate on the "time" field.
func TimeNotNil() predicate.Experience {
	return predicate.Experience(sql.FieldNotNull(FieldTime))
}

// TimeEqualFold applies the EqualFold predicate on the "time" field.
func TimeEqualFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldEqualFold(FieldTime, v))
}

// TimeContainsFold applies the ContainsFold predicate on the "time" field.
func TimeContainsFold(v string) predicate.Experience {
	return predicate.Experience(sql.FieldContainsFold(FieldTime, v))
}

// ActiveEQ applies the EQ predicate on the "active" field.
func ActiveEQ(v bool) predicate.Experience {
	return predicate.Experience(sql.FieldEQ(FieldActive, v))
}

// ActiveNEQ applies the NEQ predicate on the "active" field.
func ActiveNEQ(v bool) predicate.Experience {
	return predicate.Experience(sql.FieldNEQ(FieldActive, v))
}

// HasDescriptions applies the HasEdge predicate on the "descriptions" edge.
func HasDescriptions() predicate.Experience {
	return predicate.Experience(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, DescriptionsTable, DescriptionsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasDescriptionsWith applies the HasEdge predicate on the "descriptions" edge with a given conditions (other predicates).
func HasDescriptionsWith(preds ...predicate.Description) predicate.Experience {
	return predicate.Experience(func(s *sql.Selector) {
		step := newDescriptionsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Experience) predicate.Experience {
	return predicate.Experience(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Experience) predicate.Experience {
	return predicate.Experience(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for i, p := range predicates {
			if i > 0 {
				s1.Or()
			}
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Not applies the not operator on the given predicate.
func Not(p predicate.Experience) predicate.Experience {
	return predicate.Experience(func(s *sql.Selector) {
		p(s.Not())
	})
}