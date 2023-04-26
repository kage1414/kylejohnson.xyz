// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"kylejohnson-xyz/ent/application"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
)

// Application is the model entity for the Application schema.
type Application struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// URL holds the value of the "url" field.
	URL string `json:"url,omitempty"`
	// Active holds the value of the "active" field.
	Active bool `json:"active,omitempty"`
	// Priority holds the value of the "priority" field.
	Priority int32 `json:"priority,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the ApplicationQuery when eager-loading is set.
	Edges        ApplicationEdges `json:"edges"`
	selectValues sql.SelectValues
}

// ApplicationEdges holds the relations/edges for other nodes in the graph.
type ApplicationEdges struct {
	// Descriptions holds the value of the descriptions edge.
	Descriptions []*Description `json:"descriptions,omitempty"`
	// Technologies holds the value of the technologies edge.
	Technologies []*Technology `json:"technologies,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// DescriptionsOrErr returns the Descriptions value or an error if the edge
// was not loaded in eager-loading.
func (e ApplicationEdges) DescriptionsOrErr() ([]*Description, error) {
	if e.loadedTypes[0] {
		return e.Descriptions, nil
	}
	return nil, &NotLoadedError{edge: "descriptions"}
}

// TechnologiesOrErr returns the Technologies value or an error if the edge
// was not loaded in eager-loading.
func (e ApplicationEdges) TechnologiesOrErr() ([]*Technology, error) {
	if e.loadedTypes[1] {
		return e.Technologies, nil
	}
	return nil, &NotLoadedError{edge: "technologies"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Application) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case application.FieldActive:
			values[i] = new(sql.NullBool)
		case application.FieldID, application.FieldPriority:
			values[i] = new(sql.NullInt64)
		case application.FieldName, application.FieldURL:
			values[i] = new(sql.NullString)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Application fields.
func (a *Application) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case application.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			a.ID = int(value.Int64)
		case application.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				a.Name = value.String
			}
		case application.FieldURL:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field url", values[i])
			} else if value.Valid {
				a.URL = value.String
			}
		case application.FieldActive:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field active", values[i])
			} else if value.Valid {
				a.Active = value.Bool
			}
		case application.FieldPriority:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field priority", values[i])
			} else if value.Valid {
				a.Priority = int32(value.Int64)
			}
		default:
			a.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Application.
// This includes values selected through modifiers, order, etc.
func (a *Application) Value(name string) (ent.Value, error) {
	return a.selectValues.Get(name)
}

// QueryDescriptions queries the "descriptions" edge of the Application entity.
func (a *Application) QueryDescriptions() *DescriptionQuery {
	return NewApplicationClient(a.config).QueryDescriptions(a)
}

// QueryTechnologies queries the "technologies" edge of the Application entity.
func (a *Application) QueryTechnologies() *TechnologyQuery {
	return NewApplicationClient(a.config).QueryTechnologies(a)
}

// Update returns a builder for updating this Application.
// Note that you need to call Application.Unwrap() before calling this method if this Application
// was returned from a transaction, and the transaction was committed or rolled back.
func (a *Application) Update() *ApplicationUpdateOne {
	return NewApplicationClient(a.config).UpdateOne(a)
}

// Unwrap unwraps the Application entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (a *Application) Unwrap() *Application {
	_tx, ok := a.config.driver.(*txDriver)
	if !ok {
		panic("ent: Application is not a transactional entity")
	}
	a.config.driver = _tx.drv
	return a
}

// String implements the fmt.Stringer.
func (a *Application) String() string {
	var builder strings.Builder
	builder.WriteString("Application(")
	builder.WriteString(fmt.Sprintf("id=%v, ", a.ID))
	builder.WriteString("name=")
	builder.WriteString(a.Name)
	builder.WriteString(", ")
	builder.WriteString("url=")
	builder.WriteString(a.URL)
	builder.WriteString(", ")
	builder.WriteString("active=")
	builder.WriteString(fmt.Sprintf("%v", a.Active))
	builder.WriteString(", ")
	builder.WriteString("priority=")
	builder.WriteString(fmt.Sprintf("%v", a.Priority))
	builder.WriteByte(')')
	return builder.String()
}

// Applications is a parsable slice of Application.
type Applications []*Application
