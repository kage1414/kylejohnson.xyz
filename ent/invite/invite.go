// Code generated by ent, DO NOT EDIT.

package invite

import (
	"entgo.io/ent/dialect/sql"
)

const (
	// Label holds the string label denoting the invite type in the database.
	Label = "invite"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldEmail holds the string denoting the email field in the database.
	FieldEmail = "email"
	// FieldKey holds the string denoting the key field in the database.
	FieldKey = "key"
	// FieldRegistered holds the string denoting the registered field in the database.
	FieldRegistered = "registered"
	// Table holds the table name of the invite in the database.
	Table = "invites"
)

// Columns holds all SQL columns for invite fields.
var Columns = []string{
	FieldID,
	FieldEmail,
	FieldKey,
	FieldRegistered,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "invites"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"user_invite",
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

var (
	// DefaultRegistered holds the default value on creation for the "registered" field.
	DefaultRegistered bool
)

// OrderOption defines the ordering options for the Invite queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByEmail orders the results by the email field.
func ByEmail(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldEmail, opts...).ToFunc()
}

// ByKey orders the results by the key field.
func ByKey(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldKey, opts...).ToFunc()
}

// ByRegistered orders the results by the registered field.
func ByRegistered(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldRegistered, opts...).ToFunc()
}
