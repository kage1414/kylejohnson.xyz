// Code generated by ent, DO NOT EDIT.

package user

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the user type in the database.
	Label = "user"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldUsername holds the string denoting the username field in the database.
	FieldUsername = "username"
	// FieldEmail holds the string denoting the email field in the database.
	FieldEmail = "email"
	// FieldHash holds the string denoting the hash field in the database.
	FieldHash = "hash"
	// FieldSalt holds the string denoting the salt field in the database.
	FieldSalt = "salt"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// EdgeInvite holds the string denoting the invite edge name in mutations.
	EdgeInvite = "invite"
	// Table holds the table name of the user in the database.
	Table = "users"
	// InviteTable is the table that holds the invite relation/edge.
	InviteTable = "invites"
	// InviteInverseTable is the table name for the Invite entity.
	// It exists in this package in order to avoid circular dependency with the "invite" package.
	InviteInverseTable = "invites"
	// InviteColumn is the table column denoting the invite relation/edge.
	InviteColumn = "user_invite"
)

// Columns holds all SQL columns for user fields.
var Columns = []string{
	FieldID,
	FieldUsername,
	FieldEmail,
	FieldHash,
	FieldSalt,
	FieldName,
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

// OrderOption defines the ordering options for the User queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByUsername orders the results by the username field.
func ByUsername(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldUsername, opts...).ToFunc()
}

// ByEmail orders the results by the email field.
func ByEmail(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldEmail, opts...).ToFunc()
}

// ByHash orders the results by the hash field.
func ByHash(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldHash, opts...).ToFunc()
}

// BySalt orders the results by the salt field.
func BySalt(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldSalt, opts...).ToFunc()
}

// ByName orders the results by the name field.
func ByName(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldName, opts...).ToFunc()
}

// ByInviteCount orders the results by invite count.
func ByInviteCount(opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newInviteStep(), opts...)
	}
}

// ByInvite orders the results by invite terms.
func ByInvite(term sql.OrderTerm, terms ...sql.OrderTerm) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newInviteStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newInviteStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(InviteInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.O2M, false, InviteTable, InviteColumn),
	)
}
