// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"kylejohnson-xyz/ent/techstack"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
)

// TechStack is the model entity for the TechStack schema.
type TechStack struct {
	config `json:"-"`
	// ID of the ent.
	ID uuid.UUID `json:"id,omitempty"`
	// Stack holds the value of the "stack" field.
	Stack string `json:"stack,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the TechStackQuery when eager-loading is set.
	Edges        TechStackEdges `json:"edges"`
	selectValues sql.SelectValues
}

// TechStackEdges holds the relations/edges for other nodes in the graph.
type TechStackEdges struct {
	// Technology holds the value of the technology edge.
	Technology []*Technology `json:"technology,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// TechnologyOrErr returns the Technology value or an error if the edge
// was not loaded in eager-loading.
func (e TechStackEdges) TechnologyOrErr() ([]*Technology, error) {
	if e.loadedTypes[0] {
		return e.Technology, nil
	}
	return nil, &NotLoadedError{edge: "technology"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*TechStack) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case techstack.FieldStack:
			values[i] = new(sql.NullString)
		case techstack.FieldID:
			values[i] = new(uuid.UUID)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the TechStack fields.
func (ts *TechStack) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case techstack.FieldID:
			if value, ok := values[i].(*uuid.UUID); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[i])
			} else if value != nil {
				ts.ID = *value
			}
		case techstack.FieldStack:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field stack", values[i])
			} else if value.Valid {
				ts.Stack = value.String
			}
		default:
			ts.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the TechStack.
// This includes values selected through modifiers, order, etc.
func (ts *TechStack) Value(name string) (ent.Value, error) {
	return ts.selectValues.Get(name)
}

// QueryTechnology queries the "technology" edge of the TechStack entity.
func (ts *TechStack) QueryTechnology() *TechnologyQuery {
	return NewTechStackClient(ts.config).QueryTechnology(ts)
}

// Update returns a builder for updating this TechStack.
// Note that you need to call TechStack.Unwrap() before calling this method if this TechStack
// was returned from a transaction, and the transaction was committed or rolled back.
func (ts *TechStack) Update() *TechStackUpdateOne {
	return NewTechStackClient(ts.config).UpdateOne(ts)
}

// Unwrap unwraps the TechStack entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (ts *TechStack) Unwrap() *TechStack {
	_tx, ok := ts.config.driver.(*txDriver)
	if !ok {
		panic("ent: TechStack is not a transactional entity")
	}
	ts.config.driver = _tx.drv
	return ts
}

// String implements the fmt.Stringer.
func (ts *TechStack) String() string {
	var builder strings.Builder
	builder.WriteString("TechStack(")
	builder.WriteString(fmt.Sprintf("id=%v, ", ts.ID))
	builder.WriteString("stack=")
	builder.WriteString(ts.Stack)
	builder.WriteByte(')')
	return builder.String()
}

// TechStacks is a parsable slice of TechStack.
type TechStacks []*TechStack
