// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"kylejohnson-xyz/ent/invite"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
)

// Invite is the model entity for the Invite schema.
type Invite struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Email holds the value of the "email" field.
	Email string `json:"email,omitempty"`
	// Key holds the value of the "key" field.
	Key string `json:"key,omitempty"`
	// Registered holds the value of the "registered" field.
	Registered   bool `json:"registered,omitempty"`
	user_invite  *int
	selectValues sql.SelectValues
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Invite) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case invite.FieldRegistered:
			values[i] = new(sql.NullBool)
		case invite.FieldID:
			values[i] = new(sql.NullInt64)
		case invite.FieldEmail, invite.FieldKey:
			values[i] = new(sql.NullString)
		case invite.ForeignKeys[0]: // user_invite
			values[i] = new(sql.NullInt64)
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
			value, ok := values[j].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			i.ID = int(value.Int64)
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
			if value, ok := values[j].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field user_invite", value)
			} else if value.Valid {
				i.user_invite = new(int)
				*i.user_invite = int(value.Int64)
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
