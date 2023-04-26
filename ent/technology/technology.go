// Code generated by ent, DO NOT EDIT.

package technology

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the technology type in the database.
	Label = "technology"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldURL holds the string denoting the url field in the database.
	FieldURL = "url"
	// FieldPriority holds the string denoting the priority field in the database.
	FieldPriority = "priority"
	// EdgeApplication holds the string denoting the application edge name in mutations.
	EdgeApplication = "application"
	// EdgeStack holds the string denoting the stack edge name in mutations.
	EdgeStack = "stack"
	// Table holds the table name of the technology in the database.
	Table = "technologies"
	// ApplicationTable is the table that holds the application relation/edge.
	ApplicationTable = "technologies"
	// ApplicationInverseTable is the table name for the Application entity.
	// It exists in this package in order to avoid circular dependency with the "application" package.
	ApplicationInverseTable = "applications"
	// ApplicationColumn is the table column denoting the application relation/edge.
	ApplicationColumn = "application_technologies"
	// StackTable is the table that holds the stack relation/edge.
	StackTable = "technologies"
	// StackInverseTable is the table name for the TechStack entity.
	// It exists in this package in order to avoid circular dependency with the "techstack" package.
	StackInverseTable = "tech_stacks"
	// StackColumn is the table column denoting the stack relation/edge.
	StackColumn = "tech_stack_technology"
)

// Columns holds all SQL columns for technology fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldURL,
	FieldPriority,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "technologies"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"application_technologies",
	"tech_stack_technology",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

// OrderOption defines the ordering options for the Technology queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByName orders the results by the name field.
func ByName(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldName, opts...).ToFunc()
}

// ByURL orders the results by the url field.
func ByURL(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldURL, opts...).ToFunc()
}

// ByPriority orders the results by the priority field.
func ByPriority(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldPriority, opts...).ToFunc()
}

// ByApplicationField orders the results by application field.
func ByApplicationField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newApplicationStep(), sql.OrderByField(field, opts...))
	}
}

// ByStackField orders the results by stack field.
func ByStackField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newStackStep(), sql.OrderByField(field, opts...))
	}
}
func newApplicationStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(ApplicationInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, ApplicationTable, ApplicationColumn),
	)
}
func newStackStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(StackInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, StackTable, StackColumn),
	)
}
