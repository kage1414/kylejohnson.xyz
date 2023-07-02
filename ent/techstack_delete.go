// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"kylejohnson-xyz/ent/predicate"
	"kylejohnson-xyz/ent/techstack"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// TechStackDelete is the builder for deleting a TechStack entity.
type TechStackDelete struct {
	config
	hooks    []Hook
	mutation *TechStackMutation
}

// Where appends a list predicates to the TechStackDelete builder.
func (tsd *TechStackDelete) Where(ps ...predicate.TechStack) *TechStackDelete {
	tsd.mutation.Where(ps...)
	return tsd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (tsd *TechStackDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, TechStackMutation](ctx, tsd.sqlExec, tsd.mutation, tsd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (tsd *TechStackDelete) ExecX(ctx context.Context) int {
	n, err := tsd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (tsd *TechStackDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(techstack.Table, sqlgraph.NewFieldSpec(techstack.FieldID, field.TypeUUID))
	if ps := tsd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, tsd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	tsd.mutation.done = true
	return affected, err
}

// TechStackDeleteOne is the builder for deleting a single TechStack entity.
type TechStackDeleteOne struct {
	tsd *TechStackDelete
}

// Where appends a list predicates to the TechStackDelete builder.
func (tsdo *TechStackDeleteOne) Where(ps ...predicate.TechStack) *TechStackDeleteOne {
	tsdo.tsd.mutation.Where(ps...)
	return tsdo
}

// Exec executes the deletion query.
func (tsdo *TechStackDeleteOne) Exec(ctx context.Context) error {
	n, err := tsdo.tsd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{techstack.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (tsdo *TechStackDeleteOne) ExecX(ctx context.Context) {
	if err := tsdo.Exec(ctx); err != nil {
		panic(err)
	}
}
