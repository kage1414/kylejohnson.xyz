// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/experience"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// DescriptionCreate is the builder for creating a Description entity.
type DescriptionCreate struct {
	config
	mutation *DescriptionMutation
	hooks    []Hook
}

// SetDescription sets the "description" field.
func (dc *DescriptionCreate) SetDescription(s string) *DescriptionCreate {
	dc.mutation.SetDescription(s)
	return dc
}

// SetActive sets the "active" field.
func (dc *DescriptionCreate) SetActive(b bool) *DescriptionCreate {
	dc.mutation.SetActive(b)
	return dc
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (dc *DescriptionCreate) SetNillableActive(b *bool) *DescriptionCreate {
	if b != nil {
		dc.SetActive(*b)
	}
	return dc
}

// SetPriority sets the "priority" field.
func (dc *DescriptionCreate) SetPriority(i int32) *DescriptionCreate {
	dc.mutation.SetPriority(i)
	return dc
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (dc *DescriptionCreate) SetNillablePriority(i *int32) *DescriptionCreate {
	if i != nil {
		dc.SetPriority(*i)
	}
	return dc
}

// SetID sets the "id" field.
func (dc *DescriptionCreate) SetID(u uuid.UUID) *DescriptionCreate {
	dc.mutation.SetID(u)
	return dc
}

// SetNillableID sets the "id" field if the given value is not nil.
func (dc *DescriptionCreate) SetNillableID(u *uuid.UUID) *DescriptionCreate {
	if u != nil {
		dc.SetID(*u)
	}
	return dc
}

// SetExperienceID sets the "experience" edge to the Experience entity by ID.
func (dc *DescriptionCreate) SetExperienceID(id uuid.UUID) *DescriptionCreate {
	dc.mutation.SetExperienceID(id)
	return dc
}

// SetNillableExperienceID sets the "experience" edge to the Experience entity by ID if the given value is not nil.
func (dc *DescriptionCreate) SetNillableExperienceID(id *uuid.UUID) *DescriptionCreate {
	if id != nil {
		dc = dc.SetExperienceID(*id)
	}
	return dc
}

// SetExperience sets the "experience" edge to the Experience entity.
func (dc *DescriptionCreate) SetExperience(e *Experience) *DescriptionCreate {
	return dc.SetExperienceID(e.ID)
}

// SetApplicationID sets the "application" edge to the Application entity by ID.
func (dc *DescriptionCreate) SetApplicationID(id uuid.UUID) *DescriptionCreate {
	dc.mutation.SetApplicationID(id)
	return dc
}

// SetNillableApplicationID sets the "application" edge to the Application entity by ID if the given value is not nil.
func (dc *DescriptionCreate) SetNillableApplicationID(id *uuid.UUID) *DescriptionCreate {
	if id != nil {
		dc = dc.SetApplicationID(*id)
	}
	return dc
}

// SetApplication sets the "application" edge to the Application entity.
func (dc *DescriptionCreate) SetApplication(a *Application) *DescriptionCreate {
	return dc.SetApplicationID(a.ID)
}

// Mutation returns the DescriptionMutation object of the builder.
func (dc *DescriptionCreate) Mutation() *DescriptionMutation {
	return dc.mutation
}

// Save creates the Description in the database.
func (dc *DescriptionCreate) Save(ctx context.Context) (*Description, error) {
	dc.defaults()
	return withHooks[*Description, DescriptionMutation](ctx, dc.sqlSave, dc.mutation, dc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (dc *DescriptionCreate) SaveX(ctx context.Context) *Description {
	v, err := dc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (dc *DescriptionCreate) Exec(ctx context.Context) error {
	_, err := dc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (dc *DescriptionCreate) ExecX(ctx context.Context) {
	if err := dc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (dc *DescriptionCreate) defaults() {
	if _, ok := dc.mutation.Active(); !ok {
		v := description.DefaultActive
		dc.mutation.SetActive(v)
	}
	if _, ok := dc.mutation.ID(); !ok {
		v := description.DefaultID()
		dc.mutation.SetID(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (dc *DescriptionCreate) check() error {
	if _, ok := dc.mutation.Description(); !ok {
		return &ValidationError{Name: "description", err: errors.New(`ent: missing required field "Description.description"`)}
	}
	return nil
}

func (dc *DescriptionCreate) sqlSave(ctx context.Context) (*Description, error) {
	if err := dc.check(); err != nil {
		return nil, err
	}
	_node, _spec := dc.createSpec()
	if err := sqlgraph.CreateNode(ctx, dc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != nil {
		if id, ok := _spec.ID.Value.(*uuid.UUID); ok {
			_node.ID = *id
		} else if err := _node.ID.Scan(_spec.ID.Value); err != nil {
			return nil, err
		}
	}
	dc.mutation.id = &_node.ID
	dc.mutation.done = true
	return _node, nil
}

func (dc *DescriptionCreate) createSpec() (*Description, *sqlgraph.CreateSpec) {
	var (
		_node = &Description{config: dc.config}
		_spec = sqlgraph.NewCreateSpec(description.Table, sqlgraph.NewFieldSpec(description.FieldID, field.TypeUUID))
	)
	if id, ok := dc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = &id
	}
	if value, ok := dc.mutation.Description(); ok {
		_spec.SetField(description.FieldDescription, field.TypeString, value)
		_node.Description = value
	}
	if value, ok := dc.mutation.Active(); ok {
		_spec.SetField(description.FieldActive, field.TypeBool, value)
		_node.Active = value
	}
	if value, ok := dc.mutation.Priority(); ok {
		_spec.SetField(description.FieldPriority, field.TypeInt32, value)
		_node.Priority = value
	}
	if nodes := dc.mutation.ExperienceIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   description.ExperienceTable,
			Columns: []string{description.ExperienceColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(experience.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.experience_descriptions = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := dc.mutation.ApplicationIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   description.ApplicationTable,
			Columns: []string{description.ApplicationColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(application.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.application_descriptions = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// DescriptionCreateBulk is the builder for creating many Description entities in bulk.
type DescriptionCreateBulk struct {
	config
	builders []*DescriptionCreate
}

// Save creates the Description entities in the database.
func (dcb *DescriptionCreateBulk) Save(ctx context.Context) ([]*Description, error) {
	specs := make([]*sqlgraph.CreateSpec, len(dcb.builders))
	nodes := make([]*Description, len(dcb.builders))
	mutators := make([]Mutator, len(dcb.builders))
	for i := range dcb.builders {
		func(i int, root context.Context) {
			builder := dcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*DescriptionMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				var err error
				nodes[i], specs[i] = builder.createSpec()
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, dcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, dcb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{msg: err.Error(), wrap: err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				mutation.done = true
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, dcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (dcb *DescriptionCreateBulk) SaveX(ctx context.Context) []*Description {
	v, err := dcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (dcb *DescriptionCreateBulk) Exec(ctx context.Context) error {
	_, err := dcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (dcb *DescriptionCreateBulk) ExecX(ctx context.Context) {
	if err := dcb.Exec(ctx); err != nil {
		panic(err)
	}
}
