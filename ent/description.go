// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/experience"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
)

// Description is the model entity for the Description schema.
type Description struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Description holds the value of the "description" field.
	Description string `json:"description,omitempty"`
	// Active holds the value of the "active" field.
	Active bool `json:"active,omitempty"`
	// Priority holds the value of the "priority" field.
	Priority int32 `json:"priority,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the DescriptionQuery when eager-loading is set.
	Edges                    DescriptionEdges `json:"edges"`
	application_descriptions *int
	experience_descriptions  *int
	selectValues             sql.SelectValues
}

// DescriptionEdges holds the relations/edges for other nodes in the graph.
type DescriptionEdges struct {
	// Experience holds the value of the experience edge.
	Experience *Experience `json:"experience,omitempty"`
	// Application holds the value of the application edge.
	Application *Application `json:"application,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// ExperienceOrErr returns the Experience value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e DescriptionEdges) ExperienceOrErr() (*Experience, error) {
	if e.loadedTypes[0] {
		if e.Experience == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: experience.Label}
		}
		return e.Experience, nil
	}
	return nil, &NotLoadedError{edge: "experience"}
}

// ApplicationOrErr returns the Application value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e DescriptionEdges) ApplicationOrErr() (*Application, error) {
	if e.loadedTypes[1] {
		if e.Application == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: application.Label}
		}
		return e.Application, nil
	}
	return nil, &NotLoadedError{edge: "application"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Description) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case description.FieldActive:
			values[i] = new(sql.NullBool)
		case description.FieldID, description.FieldPriority:
			values[i] = new(sql.NullInt64)
		case description.FieldDescription:
			values[i] = new(sql.NullString)
		case description.ForeignKeys[0]: // application_descriptions
			values[i] = new(sql.NullInt64)
		case description.ForeignKeys[1]: // experience_descriptions
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Description fields.
func (d *Description) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case description.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			d.ID = int(value.Int64)
		case description.FieldDescription:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field description", values[i])
			} else if value.Valid {
				d.Description = value.String
			}
		case description.FieldActive:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field active", values[i])
			} else if value.Valid {
				d.Active = value.Bool
			}
		case description.FieldPriority:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field priority", values[i])
			} else if value.Valid {
				d.Priority = int32(value.Int64)
			}
		case description.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field application_descriptions", value)
			} else if value.Valid {
				d.application_descriptions = new(int)
				*d.application_descriptions = int(value.Int64)
			}
		case description.ForeignKeys[1]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field experience_descriptions", value)
			} else if value.Valid {
				d.experience_descriptions = new(int)
				*d.experience_descriptions = int(value.Int64)
			}
		default:
			d.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Description.
// This includes values selected through modifiers, order, etc.
func (d *Description) Value(name string) (ent.Value, error) {
	return d.selectValues.Get(name)
}

// QueryExperience queries the "experience" edge of the Description entity.
func (d *Description) QueryExperience() *ExperienceQuery {
	return NewDescriptionClient(d.config).QueryExperience(d)
}

// QueryApplication queries the "application" edge of the Description entity.
func (d *Description) QueryApplication() *ApplicationQuery {
	return NewDescriptionClient(d.config).QueryApplication(d)
}

// Update returns a builder for updating this Description.
// Note that you need to call Description.Unwrap() before calling this method if this Description
// was returned from a transaction, and the transaction was committed or rolled back.
func (d *Description) Update() *DescriptionUpdateOne {
	return NewDescriptionClient(d.config).UpdateOne(d)
}

// Unwrap unwraps the Description entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (d *Description) Unwrap() *Description {
	_tx, ok := d.config.driver.(*txDriver)
	if !ok {
		panic("ent: Description is not a transactional entity")
	}
	d.config.driver = _tx.drv
	return d
}

// String implements the fmt.Stringer.
func (d *Description) String() string {
	var builder strings.Builder
	builder.WriteString("Description(")
	builder.WriteString(fmt.Sprintf("id=%v, ", d.ID))
	builder.WriteString("description=")
	builder.WriteString(d.Description)
	builder.WriteString(", ")
	builder.WriteString("active=")
	builder.WriteString(fmt.Sprintf("%v", d.Active))
	builder.WriteString(", ")
	builder.WriteString("priority=")
	builder.WriteString(fmt.Sprintf("%v", d.Priority))
	builder.WriteByte(')')
	return builder.String()
}

// Descriptions is a parsable slice of Description.
type Descriptions []*Description
