// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/experience"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// ExperienceCreate is the builder for creating a Experience entity.
type ExperienceCreate struct {
	config
	mutation *ExperienceMutation
	hooks    []Hook
}

// SetEmployer sets the "employer" field.
func (ec *ExperienceCreate) SetEmployer(s string) *ExperienceCreate {
	ec.mutation.SetEmployer(s)
	return ec
}

// SetPosition sets the "position" field.
func (ec *ExperienceCreate) SetPosition(s string) *ExperienceCreate {
	ec.mutation.SetPosition(s)
	return ec
}

// SetTime sets the "time" field.
func (ec *ExperienceCreate) SetTime(s string) *ExperienceCreate {
	ec.mutation.SetTime(s)
	return ec
}

// SetNillableTime sets the "time" field if the given value is not nil.
func (ec *ExperienceCreate) SetNillableTime(s *string) *ExperienceCreate {
	if s != nil {
		ec.SetTime(*s)
	}
	return ec
}

// SetActive sets the "active" field.
func (ec *ExperienceCreate) SetActive(b bool) *ExperienceCreate {
	ec.mutation.SetActive(b)
	return ec
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (ec *ExperienceCreate) SetNillableActive(b *bool) *ExperienceCreate {
	if b != nil {
		ec.SetActive(*b)
	}
	return ec
}

// SetPriority sets the "priority" field.
func (ec *ExperienceCreate) SetPriority(i int32) *ExperienceCreate {
	ec.mutation.SetPriority(i)
	return ec
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (ec *ExperienceCreate) SetNillablePriority(i *int32) *ExperienceCreate {
	if i != nil {
		ec.SetPriority(*i)
	}
	return ec
}

// AddDescriptionIDs adds the "descriptions" edge to the Description entity by IDs.
func (ec *ExperienceCreate) AddDescriptionIDs(ids ...int) *ExperienceCreate {
	ec.mutation.AddDescriptionIDs(ids...)
	return ec
}

// AddDescriptions adds the "descriptions" edges to the Description entity.
func (ec *ExperienceCreate) AddDescriptions(d ...*Description) *ExperienceCreate {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return ec.AddDescriptionIDs(ids...)
}

// Mutation returns the ExperienceMutation object of the builder.
func (ec *ExperienceCreate) Mutation() *ExperienceMutation {
	return ec.mutation
}

// Save creates the Experience in the database.
func (ec *ExperienceCreate) Save(ctx context.Context) (*Experience, error) {
	ec.defaults()
	return withHooks[*Experience, ExperienceMutation](ctx, ec.sqlSave, ec.mutation, ec.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (ec *ExperienceCreate) SaveX(ctx context.Context) *Experience {
	v, err := ec.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ec *ExperienceCreate) Exec(ctx context.Context) error {
	_, err := ec.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ec *ExperienceCreate) ExecX(ctx context.Context) {
	if err := ec.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (ec *ExperienceCreate) defaults() {
	if _, ok := ec.mutation.Active(); !ok {
		v := experience.DefaultActive
		ec.mutation.SetActive(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (ec *ExperienceCreate) check() error {
	if _, ok := ec.mutation.Employer(); !ok {
		return &ValidationError{Name: "employer", err: errors.New(`ent: missing required field "Experience.employer"`)}
	}
	if _, ok := ec.mutation.Position(); !ok {
		return &ValidationError{Name: "position", err: errors.New(`ent: missing required field "Experience.position"`)}
	}
	return nil
}

func (ec *ExperienceCreate) sqlSave(ctx context.Context) (*Experience, error) {
	if err := ec.check(); err != nil {
		return nil, err
	}
	_node, _spec := ec.createSpec()
	if err := sqlgraph.CreateNode(ctx, ec.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	ec.mutation.id = &_node.ID
	ec.mutation.done = true
	return _node, nil
}

func (ec *ExperienceCreate) createSpec() (*Experience, *sqlgraph.CreateSpec) {
	var (
		_node = &Experience{config: ec.config}
		_spec = sqlgraph.NewCreateSpec(experience.Table, sqlgraph.NewFieldSpec(experience.FieldID, field.TypeInt))
	)
	if value, ok := ec.mutation.Employer(); ok {
		_spec.SetField(experience.FieldEmployer, field.TypeString, value)
		_node.Employer = value
	}
	if value, ok := ec.mutation.Position(); ok {
		_spec.SetField(experience.FieldPosition, field.TypeString, value)
		_node.Position = value
	}
	if value, ok := ec.mutation.Time(); ok {
		_spec.SetField(experience.FieldTime, field.TypeString, value)
		_node.Time = value
	}
	if value, ok := ec.mutation.Active(); ok {
		_spec.SetField(experience.FieldActive, field.TypeBool, value)
		_node.Active = value
	}
	if value, ok := ec.mutation.Priority(); ok {
		_spec.SetField(experience.FieldPriority, field.TypeInt32, value)
		_node.Priority = value
	}
	if nodes := ec.mutation.DescriptionsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   experience.DescriptionsTable,
			Columns: []string{experience.DescriptionsColumn},
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
	return _node, _spec
}

// ExperienceCreateBulk is the builder for creating many Experience entities in bulk.
type ExperienceCreateBulk struct {
	config
	builders []*ExperienceCreate
}

// Save creates the Experience entities in the database.
func (ecb *ExperienceCreateBulk) Save(ctx context.Context) ([]*Experience, error) {
	specs := make([]*sqlgraph.CreateSpec, len(ecb.builders))
	nodes := make([]*Experience, len(ecb.builders))
	mutators := make([]Mutator, len(ecb.builders))
	for i := range ecb.builders {
		func(i int, root context.Context) {
			builder := ecb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ExperienceMutation)
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
					_, err = mutators[i+1].Mutate(root, ecb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, ecb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, ecb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (ecb *ExperienceCreateBulk) SaveX(ctx context.Context) []*Experience {
	v, err := ecb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ecb *ExperienceCreateBulk) Exec(ctx context.Context) error {
	_, err := ecb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ecb *ExperienceCreateBulk) ExecX(ctx context.Context) {
	if err := ecb.Exec(ctx); err != nil {
		panic(err)
	}
}
