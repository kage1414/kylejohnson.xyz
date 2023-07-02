// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/technology"
	"kylejohnson-xyz/ent/techstack"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// TechnologyCreate is the builder for creating a Technology entity.
type TechnologyCreate struct {
	config
	mutation *TechnologyMutation
	hooks    []Hook
}

// SetName sets the "name" field.
func (tc *TechnologyCreate) SetName(s string) *TechnologyCreate {
	tc.mutation.SetName(s)
	return tc
}

// SetURL sets the "url" field.
func (tc *TechnologyCreate) SetURL(s string) *TechnologyCreate {
	tc.mutation.SetURL(s)
	return tc
}

// SetNillableURL sets the "url" field if the given value is not nil.
func (tc *TechnologyCreate) SetNillableURL(s *string) *TechnologyCreate {
	if s != nil {
		tc.SetURL(*s)
	}
	return tc
}

// SetPriority sets the "priority" field.
func (tc *TechnologyCreate) SetPriority(i int32) *TechnologyCreate {
	tc.mutation.SetPriority(i)
	return tc
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (tc *TechnologyCreate) SetNillablePriority(i *int32) *TechnologyCreate {
	if i != nil {
		tc.SetPriority(*i)
	}
	return tc
}

// SetID sets the "id" field.
func (tc *TechnologyCreate) SetID(u uuid.UUID) *TechnologyCreate {
	tc.mutation.SetID(u)
	return tc
}

// SetNillableID sets the "id" field if the given value is not nil.
func (tc *TechnologyCreate) SetNillableID(u *uuid.UUID) *TechnologyCreate {
	if u != nil {
		tc.SetID(*u)
	}
	return tc
}

// AddApplicationIDs adds the "application" edge to the Application entity by IDs.
func (tc *TechnologyCreate) AddApplicationIDs(ids ...uuid.UUID) *TechnologyCreate {
	tc.mutation.AddApplicationIDs(ids...)
	return tc
}

// AddApplication adds the "application" edges to the Application entity.
func (tc *TechnologyCreate) AddApplication(a ...*Application) *TechnologyCreate {
	ids := make([]uuid.UUID, len(a))
	for i := range a {
		ids[i] = a[i].ID
	}
	return tc.AddApplicationIDs(ids...)
}

// SetStackID sets the "stack" edge to the TechStack entity by ID.
func (tc *TechnologyCreate) SetStackID(id uuid.UUID) *TechnologyCreate {
	tc.mutation.SetStackID(id)
	return tc
}

// SetNillableStackID sets the "stack" edge to the TechStack entity by ID if the given value is not nil.
func (tc *TechnologyCreate) SetNillableStackID(id *uuid.UUID) *TechnologyCreate {
	if id != nil {
		tc = tc.SetStackID(*id)
	}
	return tc
}

// SetStack sets the "stack" edge to the TechStack entity.
func (tc *TechnologyCreate) SetStack(t *TechStack) *TechnologyCreate {
	return tc.SetStackID(t.ID)
}

// Mutation returns the TechnologyMutation object of the builder.
func (tc *TechnologyCreate) Mutation() *TechnologyMutation {
	return tc.mutation
}

// Save creates the Technology in the database.
func (tc *TechnologyCreate) Save(ctx context.Context) (*Technology, error) {
	tc.defaults()
	return withHooks[*Technology, TechnologyMutation](ctx, tc.sqlSave, tc.mutation, tc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (tc *TechnologyCreate) SaveX(ctx context.Context) *Technology {
	v, err := tc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (tc *TechnologyCreate) Exec(ctx context.Context) error {
	_, err := tc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (tc *TechnologyCreate) ExecX(ctx context.Context) {
	if err := tc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (tc *TechnologyCreate) defaults() {
	if _, ok := tc.mutation.ID(); !ok {
		v := technology.DefaultID()
		tc.mutation.SetID(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (tc *TechnologyCreate) check() error {
	if _, ok := tc.mutation.Name(); !ok {
		return &ValidationError{Name: "name", err: errors.New(`ent: missing required field "Technology.name"`)}
	}
	return nil
}

func (tc *TechnologyCreate) sqlSave(ctx context.Context) (*Technology, error) {
	if err := tc.check(); err != nil {
		return nil, err
	}
	_node, _spec := tc.createSpec()
	if err := sqlgraph.CreateNode(ctx, tc.driver, _spec); err != nil {
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
	tc.mutation.id = &_node.ID
	tc.mutation.done = true
	return _node, nil
}

func (tc *TechnologyCreate) createSpec() (*Technology, *sqlgraph.CreateSpec) {
	var (
		_node = &Technology{config: tc.config}
		_spec = sqlgraph.NewCreateSpec(technology.Table, sqlgraph.NewFieldSpec(technology.FieldID, field.TypeUUID))
	)
	if id, ok := tc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = &id
	}
	if value, ok := tc.mutation.Name(); ok {
		_spec.SetField(technology.FieldName, field.TypeString, value)
		_node.Name = value
	}
	if value, ok := tc.mutation.URL(); ok {
		_spec.SetField(technology.FieldURL, field.TypeString, value)
		_node.URL = value
	}
	if value, ok := tc.mutation.Priority(); ok {
		_spec.SetField(technology.FieldPriority, field.TypeInt32, value)
		_node.Priority = value
	}
	if nodes := tc.mutation.ApplicationIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   technology.ApplicationTable,
			Columns: technology.ApplicationPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(application.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := tc.mutation.StackIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   technology.StackTable,
			Columns: []string{technology.StackColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(techstack.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.tech_stack_technology = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// TechnologyCreateBulk is the builder for creating many Technology entities in bulk.
type TechnologyCreateBulk struct {
	config
	builders []*TechnologyCreate
}

// Save creates the Technology entities in the database.
func (tcb *TechnologyCreateBulk) Save(ctx context.Context) ([]*Technology, error) {
	specs := make([]*sqlgraph.CreateSpec, len(tcb.builders))
	nodes := make([]*Technology, len(tcb.builders))
	mutators := make([]Mutator, len(tcb.builders))
	for i := range tcb.builders {
		func(i int, root context.Context) {
			builder := tcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*TechnologyMutation)
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
					_, err = mutators[i+1].Mutate(root, tcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, tcb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, tcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (tcb *TechnologyCreateBulk) SaveX(ctx context.Context) []*Technology {
	v, err := tcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (tcb *TechnologyCreateBulk) Exec(ctx context.Context) error {
	_, err := tcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (tcb *TechnologyCreateBulk) ExecX(ctx context.Context) {
	if err := tcb.Exec(ctx); err != nil {
		panic(err)
	}
}
