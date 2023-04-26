// Code generated by ent, DO NOT EDIT.

package techstack

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the techstack type in the database.
	Label = "tech_stack"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldStack holds the string denoting the stack field in the database.
	FieldStack = "stack"
	// EdgeTechnology holds the string denoting the technology edge name in mutations.
	EdgeTechnology = "technology"
	// Table holds the table name of the techstack in the database.
	Table = "tech_stacks"
	// TechnologyTable is the table that holds the technology relation/edge.
	TechnologyTable = "technologies"
	// TechnologyInverseTable is the table name for the Technology entity.
	// It exists in this package in order to avoid circular dependency with the "technology" package.
	TechnologyInverseTable = "technologies"
	// TechnologyColumn is the table column denoting the technology relation/edge.
	TechnologyColumn = "tech_stack_technology"
)

// Columns holds all SQL columns for techstack fields.
var Columns = []string{
	FieldID,
	FieldStack,
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	return false
}

// OrderOption defines the ordering options for the TechStack queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByStack orders the results by the stack field.
func ByStack(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldStack, opts...).ToFunc()
}

// ByTechnologyCount orders the results by technology count.
func ByTechnologyCount(opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newTechnologyStep(), opts...)
	}
}

// ByTechnology orders the results by technology terms.
func ByTechnology(term sql.OrderTerm, terms ...sql.OrderTerm) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newTechnologyStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newTechnologyStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(TechnologyInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.O2M, false, TechnologyTable, TechnologyColumn),
	)
}