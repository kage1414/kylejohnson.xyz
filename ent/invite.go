// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"kylejohnson-xyz/ent/invite"
	"kylejohnson-xyz/ent/user"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
)

// Invite is the model entity for the Invite schema.
type Invite struct {
	config `json:"-"`
	// ID of the ent.
	ID uuid.UUID `json:"id,omitempty"`
	// Email holds the value of the "email" field.
	Email string `json:"email,omitempty"`
	// Key holds the value of the "key" field.
	Key string `json:"key,omitempty"`
	// Registered holds the value of the "registered" field.
	Registered bool `json:"registered,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the InviteQuery when eager-loading is set.
	Edges        InviteEdges `json:"edges"`
	user_invite  *uuid.UUID
	selectValues sql.SelectValues
}

// InviteEdges holds the relations/edges for other nodes in the graph.
type InviteEdges struct {
	// User holds the value of the user edge.
	User *User `json:"user,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// UserOrErr returns the User value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e InviteEdges) UserOrErr() (*User, error) {
	if e.loadedTypes[0] {
		if e.User == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: user.Label}
		}
		return e.User, nil
	}
	return nil, &NotLoadedError{edge: "user"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Invite) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case invite.FieldRegistered:
			values[i] = new(sql.NullBool)
		case invite.FieldEmail, invite.FieldKey:
			values[i] = new(sql.NullString)
		case invite.FieldID:
			values[i] = new(uuid.UUID)
		case invite.ForeignKeys[0]: // user_invite
			values[i] = &sql.NullScanner{S: new(uuid.UUID)}
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Invite fields.
func (i *Invite) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for j := range columns {
		switch columns[j] {
		case invite.FieldID:
			if value, ok := values[j].(*uuid.UUID); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[j])
			} else if value != nil {
				i.ID = *value
			}
		case invite.FieldEmail:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field email", values[j])
			} else if value.Valid {
				i.Email = value.String
			}
		case invite.FieldKey:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field key", values[j])
			} else if value.Valid {
				i.Key = value.String
			}
		case invite.FieldRegistered:
			if value, ok := values[j].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field registered", values[j])
			} else if value.Valid {
				i.Registered = value.Bool
			}
		case invite.ForeignKeys[0]:
			if value, ok := values[j].(*sql.NullScanner); !ok {
				return fmt.Errorf("unexpected type %T for field user_invite", values[j])
			} else if value.Valid {
				i.user_invite = new(uuid.UUID)
				*i.user_invite = *value.S.(*uuid.UUID)
			}
		default:
			i.selectValues.Set(columns[j], values[j])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Invite.
// This includes values selected through modifiers, order, etc.
func (i *Invite) Value(name string) (ent.Value, error) {
	return i.selectValues.Get(name)
}

// QueryUser queries the "user" edge of the Invite entity.
func (i *Invite) QueryUser() *UserQuery {
	return NewInviteClient(i.config).QueryUser(i)
}

// Update returns a builder for updating this Invite.
// Note that you need to call Invite.Unwrap() before calling this method if this Invite
// was returned from a transaction, and the transaction was committed or rolled back.
func (i *Invite) Update() *InviteUpdateOne {
	return NewInviteClient(i.config).UpdateOne(i)
}

// Unwrap unwraps the Invite entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (i *Invite) Unwrap() *Invite {
	_tx, ok := i.config.driver.(*txDriver)
	if !ok {
		panic("ent: Invite is not a transactional entity")
	}
	i.config.driver = _tx.drv
	return i
}

// String implements the fmt.Stringer.
func (i *Invite) String() string {
	var builder strings.Builder
	builder.WriteString("Invite(")
	builder.WriteString(fmt.Sprintf("id=%v, ", i.ID))
	builder.WriteString("email=")
	builder.WriteString(i.Email)
	builder.WriteString(", ")
	builder.WriteString("key=")
	builder.WriteString(i.Key)
	builder.WriteString(", ")
	builder.WriteString("registered=")
	builder.WriteString(fmt.Sprintf("%v", i.Registered))
	builder.WriteByte(')')
	return builder.String()
}

// Invites is a parsable slice of Invite.
type Invites []*Invite
