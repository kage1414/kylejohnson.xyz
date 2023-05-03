// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"kylejohnson-xyz/ent/education"
	"kylejohnson-xyz/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// EducationDelete is the builder for deleting a Education entity.
type EducationDelete struct {
	config
	hooks    []Hook
	mutation *EducationMutation
}

// Where appends a list predicates to the EducationDelete builder.
func (ed *EducationDelete) Where(ps ...predicate.Education) *EducationDelete {
	ed.mutation.Where(ps...)
	return ed
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (ed *EducationDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, EducationMutation](ctx, ed.sqlExec, ed.mutation, ed.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (ed *EducationDelete) ExecX(ctx context.Context) int {
	n, err := ed.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (ed *EducationDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(education.Table, sqlgraph.NewFieldSpec(education.FieldID, field.TypeUUID))
	if ps := ed.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, ed.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	ed.mutation.done = true
	return affected, err
}

// EducationDeleteOne is the builder for deleting a single Education entity.
type EducationDeleteOne struct {
	ed *EducationDelete
}

// Where appends a list predicates to the EducationDelete builder.
func (edo *EducationDeleteOne) Where(ps ...predicate.Education) *EducationDeleteOne {
	edo.ed.mutation.Where(ps...)
	return edo
}

// Exec executes the deletion query.
func (edo *EducationDeleteOne) Exec(ctx context.Context) error {
	n, err := edo.ed.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{education.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (edo *EducationDeleteOne) ExecX(ctx context.Context) {
	if err := edo.Exec(ctx); err != nil {
		panic(err)
	}
}
