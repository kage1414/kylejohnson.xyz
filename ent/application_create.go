// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/technology"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// ApplicationCreate is the builder for creating a Application entity.
type ApplicationCreate struct {
	config
	mutation *ApplicationMutation
	hooks    []Hook
}

// SetName sets the "name" field.
func (ac *ApplicationCreate) SetName(s string) *ApplicationCreate {
	ac.mutation.SetName(s)
	return ac
}

// SetNillableName sets the "name" field if the given value is not nil.
func (ac *ApplicationCreate) SetNillableName(s *string) *ApplicationCreate {
	if s != nil {
		ac.SetName(*s)
	}
	return ac
}

// SetURL sets the "url" field.
func (ac *ApplicationCreate) SetURL(s string) *ApplicationCreate {
	ac.mutation.SetURL(s)
	return ac
}

// SetNillableURL sets the "url" field if the given value is not nil.
func (ac *ApplicationCreate) SetNillableURL(s *string) *ApplicationCreate {
	if s != nil {
		ac.SetURL(*s)
	}
	return ac
}

// SetActive sets the "active" field.
func (ac *ApplicationCreate) SetActive(b bool) *ApplicationCreate {
	ac.mutation.SetActive(b)
	return ac
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (ac *ApplicationCreate) SetNillableActive(b *bool) *ApplicationCreate {
	if b != nil {
		ac.SetActive(*b)
	}
	return ac
}

// SetPriority sets the "priority" field.
func (ac *ApplicationCreate) SetPriority(i int32) *ApplicationCreate {
	ac.mutation.SetPriority(i)
	return ac
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (ac *ApplicationCreate) SetNillablePriority(i *int32) *ApplicationCreate {
	if i != nil {
		ac.SetPriority(*i)
	}
	return ac
}

// AddDescriptionIDs adds the "descriptions" edge to the Description entity by IDs.
func (ac *ApplicationCreate) AddDescriptionIDs(ids ...int) *ApplicationCreate {
	ac.mutation.AddDescriptionIDs(ids...)
	return ac
}

// AddDescriptions adds the "descriptions" edges to the Description entity.
func (ac *ApplicationCreate) AddDescriptions(d ...*Description) *ApplicationCreate {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return ac.AddDescriptionIDs(ids...)
}

// AddTechnologyIDs adds the "technologies" edge to the Technology entity by IDs.
func (ac *ApplicationCreate) AddTechnologyIDs(ids ...int) *ApplicationCreate {
	ac.mutation.AddTechnologyIDs(ids...)
	return ac
}

// AddTechnologies adds the "technologies" edges to the Technology entity.
func (ac *ApplicationCreate) AddTechnologies(t ...*Technology) *ApplicationCreate {
	ids := make([]int, len(t))
	for i := range t {
		ids[i] = t[i].ID
	}
	return ac.AddTechnologyIDs(ids...)
}

// Mutation returns the ApplicationMutation object of the builder.
func (ac *ApplicationCreate) Mutation() *ApplicationMutation {
	return ac.mutation
}

// Save creates the Application in the database.
func (ac *ApplicationCreate) Save(ctx context.Context) (*Application, error) {
	ac.defaults()
	return withHooks[*Application, ApplicationMutation](ctx, ac.sqlSave, ac.mutation, ac.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (ac *ApplicationCreate) SaveX(ctx context.Context) *Application {
	v, err := ac.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ac *ApplicationCreate) Exec(ctx context.Context) error {
	_, err := ac.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ac *ApplicationCreate) ExecX(ctx context.Context) {
	if err := ac.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (ac *ApplicationCreate) defaults() {
	if _, ok := ac.mutation.Active(); !ok {
		v := application.DefaultActive
		ac.mutation.SetActive(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (ac *ApplicationCreate) check() error {
	if _, ok := ac.mutation.Active(); !ok {
		return &ValidationError{Name: "active", err: errors.New(`ent: missing required field "Application.active"`)}
	}
	return nil
}

func (ac *ApplicationCreate) sqlSave(ctx context.Context) (*Application, error) {
	if err := ac.check(); err != nil {
		return nil, err
	}
	_node, _spec := ac.createSpec()
	if err := sqlgraph.CreateNode(ctx, ac.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	ac.mutation.id = &_node.ID
	ac.mutation.done = true
	return _node, nil
}

func (ac *ApplicationCreate) createSpec() (*Application, *sqlgraph.CreateSpec) {
	var (
		_node = &Application{config: ac.config}
		_spec = sqlgraph.NewCreateSpec(application.Table, sqlgraph.NewFieldSpec(application.FieldID, field.TypeInt))
	)
	if value, ok := ac.mutation.Name(); ok {
		_spec.SetField(application.FieldName, field.TypeString, value)
		_node.Name = value
	}
	if value, ok := ac.mutation.URL(); ok {
		_spec.SetField(application.FieldURL, field.TypeString, value)
		_node.URL = value
	}
	if value, ok := ac.mutation.Active(); ok {
		_spec.SetField(application.FieldActive, field.TypeBool, value)
		_node.Active = value
	}
	if value, ok := ac.mutation.Priority(); ok {
		_spec.SetField(application.FieldPriority, field.TypeInt32, value)
		_node.Priority = value
	}
	if nodes := ac.mutation.DescriptionsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   application.DescriptionsTable,
			Columns: []string{application.DescriptionsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(description.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := ac.mutation.TechnologiesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: []string{application.TechnologiesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// ApplicationCreateBulk is the builder for creating many Application entities in bulk.
type ApplicationCreateBulk struct {
	config
	builders []*ApplicationCreate
}

// Save creates the Application entities in the database.
func (acb *ApplicationCreateBulk) Save(ctx context.Context) ([]*Application, error) {
	specs := make([]*sqlgraph.CreateSpec, len(acb.builders))
	nodes := make([]*Application, len(acb.builders))
	mutators := make([]Mutator, len(acb.builders))
	for i := range acb.builders {
		func(i int, root context.Context) {
			builder := acb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ApplicationMutation)
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
					_, err = mutators[i+1].Mutate(root, acb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, acb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{msg: err.Error(), wrap: err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				if specs[i].ID.Value != nil {
					id := specs[i].ID.Value.(int64)
					nodes[i].ID = int(id)
				}
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
		if _, err := mutators[0].Mutate(ctx, acb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (acb *ApplicationCreateBulk) SaveX(ctx context.Context) []*Application {
	v, err := acb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (acb *ApplicationCreateBulk) Exec(ctx context.Context) error {
	_, err := acb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (acb *ApplicationCreateBulk) ExecX(ctx context.Context) {
	if err := acb.Exec(ctx); err != nil {
		panic(err)
	}
}