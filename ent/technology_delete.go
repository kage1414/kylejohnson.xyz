// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"kylejohnson-xyz/ent/predicate"
	"kylejohnson-xyz/ent/technology"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// TechnologyDelete is the builder for deleting a Technology entity.
type TechnologyDelete struct {
	config
	hooks    []Hook
	mutation *TechnologyMutation
}

// Where appends a list predicates to the TechnologyDelete builder.
func (td *TechnologyDelete) Where(ps ...predicate.Technology) *TechnologyDelete {
	td.mutation.Where(ps...)
	return td
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (td *TechnologyDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, TechnologyMutation](ctx, td.sqlExec, td.mutation, td.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (td *TechnologyDelete) ExecX(ctx context.Context) int {
	n, err := td.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (td *TechnologyDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(technology.Table, sqlgraph.NewFieldSpec(technology.FieldID, field.TypeUUID))
	if ps := td.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, td.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	td.mutation.done = true
	return affected, err
}

// TechnologyDeleteOne is the builder for deleting a single Technology entity.
type TechnologyDeleteOne struct {
	td *TechnologyDelete
}

// Where appends a list predicates to the TechnologyDelete builder.
func (tdo *TechnologyDeleteOne) Where(ps ...predicate.Technology) *TechnologyDeleteOne {
	tdo.td.mutation.Where(ps...)
	return tdo
}

// Exec executes the deletion query.
func (tdo *TechnologyDeleteOne) Exec(ctx context.Context) error {
	n, err := tdo.td.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{technology.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (tdo *TechnologyDeleteOne) ExecX(ctx context.Context) {
	if err := tdo.Exec(ctx); err != nil {
		panic(err)
	}
}
