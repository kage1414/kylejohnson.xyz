// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/education"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// EducationCreate is the builder for creating a Education entity.
type EducationCreate struct {
	config
	mutation *EducationMutation
	hooks    []Hook
}

// SetSchool sets the "school" field.
func (ec *EducationCreate) SetSchool(s string) *EducationCreate {
	ec.mutation.SetSchool(s)
	return ec
}

// SetTime sets the "time" field.
func (ec *EducationCreate) SetTime(s string) *EducationCreate {
	ec.mutation.SetTime(s)
	return ec
}

// SetNillableTime sets the "time" field if the given value is not nil.
func (ec *EducationCreate) SetNillableTime(s *string) *EducationCreate {
	if s != nil {
		ec.SetTime(*s)
	}
	return ec
}

// SetCertificate sets the "certificate" field.
func (ec *EducationCreate) SetCertificate(s string) *EducationCreate {
	ec.mutation.SetCertificate(s)
	return ec
}

// SetNillableCertificate sets the "certificate" field if the given value is not nil.
func (ec *EducationCreate) SetNillableCertificate(s *string) *EducationCreate {
	if s != nil {
		ec.SetCertificate(*s)
	}
	return ec
}

// SetDegree sets the "degree" field.
func (ec *EducationCreate) SetDegree(s string) *EducationCreate {
	ec.mutation.SetDegree(s)
	return ec
}

// SetNillableDegree sets the "degree" field if the given value is not nil.
func (ec *EducationCreate) SetNillableDegree(s *string) *EducationCreate {
	if s != nil {
		ec.SetDegree(*s)
	}
	return ec
}

// SetActive sets the "active" field.
func (ec *EducationCreate) SetActive(b bool) *EducationCreate {
	ec.mutation.SetActive(b)
	return ec
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (ec *EducationCreate) SetNillableActive(b *bool) *EducationCreate {
	if b != nil {
		ec.SetActive(*b)
	}
	return ec
}

// SetPriority sets the "priority" field.
func (ec *EducationCreate) SetPriority(i int32) *EducationCreate {
	ec.mutation.SetPriority(i)
	return ec
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (ec *EducationCreate) SetNillablePriority(i *int32) *EducationCreate {
	if i != nil {
		ec.SetPriority(*i)
	}
	return ec
}

// Mutation returns the EducationMutation object of the builder.
func (ec *EducationCreate) Mutation() *EducationMutation {
	return ec.mutation
}

// Save creates the Education in the database.
func (ec *EducationCreate) Save(ctx context.Context) (*Education, error) {
	ec.defaults()
	return withHooks[*Education, EducationMutation](ctx, ec.sqlSave, ec.mutation, ec.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (ec *EducationCreate) SaveX(ctx context.Context) *Education {
	v, err := ec.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ec *EducationCreate) Exec(ctx context.Context) error {
	_, err := ec.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ec *EducationCreate) ExecX(ctx context.Context) {
	if err := ec.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (ec *EducationCreate) defaults() {
	if _, ok := ec.mutation.Active(); !ok {
		v := education.DefaultActive
		ec.mutation.SetActive(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (ec *EducationCreate) check() error {
	if _, ok := ec.mutation.School(); !ok {
		return &ValidationError{Name: "school", err: errors.New(`ent: missing required field "Education.school"`)}
	}
	if _, ok := ec.mutation.Active(); !ok {
		return &ValidationError{Name: "active", err: errors.New(`ent: missing required field "Education.active"`)}
	}
	return nil
}

func (ec *EducationCreate) sqlSave(ctx context.Context) (*Education, error) {
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

func (ec *EducationCreate) createSpec() (*Education, *sqlgraph.CreateSpec) {
	var (
		_node = &Education{config: ec.config}
		_spec = sqlgraph.NewCreateSpec(education.Table, sqlgraph.NewFieldSpec(education.FieldID, field.TypeInt))
	)
	if value, ok := ec.mutation.School(); ok {
		_spec.SetField(education.FieldSchool, field.TypeString, value)
		_node.School = value
	}
	if value, ok := ec.mutation.Time(); ok {
		_spec.SetField(education.FieldTime, field.TypeString, value)
		_node.Time = value
	}
	if value, ok := ec.mutation.Certificate(); ok {
		_spec.SetField(education.FieldCertificate, field.TypeString, value)
		_node.Certificate = value
	}
	if value, ok := ec.mutation.Degree(); ok {
		_spec.SetField(education.FieldDegree, field.TypeString, value)
		_node.Degree = value
	}
	if value, ok := ec.mutation.Active(); ok {
		_spec.SetField(education.FieldActive, field.TypeBool, value)
		_node.Active = value
	}
	if value, ok := ec.mutation.Priority(); ok {
		_spec.SetField(education.FieldPriority, field.TypeInt32, value)
		_node.Priority = value
	}
	return _node, _spec
}

// EducationCreateBulk is the builder for creating many Education entities in bulk.
type EducationCreateBulk struct {
	config
	builders []*EducationCreate
}

// Save creates the Education entities in the database.
func (ecb *EducationCreateBulk) Save(ctx context.Context) ([]*Education, error) {
	specs := make([]*sqlgraph.CreateSpec, len(ecb.builders))
	nodes := make([]*Education, len(ecb.builders))
	mutators := make([]Mutator, len(ecb.builders))
	for i := range ecb.builders {
		func(i int, root context.Context) {
			builder := ecb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*EducationMutation)
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
func (ecb *EducationCreateBulk) SaveX(ctx context.Context) []*Education {
	v, err := ecb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ecb *EducationCreateBulk) Exec(ctx context.Context) error {
	_, err := ecb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ecb *EducationCreateBulk) ExecX(ctx context.Context) {
	if err := ecb.Exec(ctx); err != nil {
		panic(err)
	}
}