// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"kylejohnson-xyz/ent/experience"
	"kylejohnson-xyz/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// ExperienceDelete is the builder for deleting a Experience entity.
type ExperienceDelete struct {
	config
	hooks    []Hook
	mutation *ExperienceMutation
}

// Where appends a list predicates to the ExperienceDelete builder.
func (ed *ExperienceDelete) Where(ps ...predicate.Experience) *ExperienceDelete {
	ed.mutation.Where(ps...)
	return ed
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (ed *ExperienceDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, ExperienceMutation](ctx, ed.sqlExec, ed.mutation, ed.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (ed *ExperienceDelete) ExecX(ctx context.Context) int {
	n, err := ed.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (ed *ExperienceDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(experience.Table, sqlgraph.NewFieldSpec(experience.FieldID, field.TypeUUID))
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

// ExperienceDeleteOne is the builder for deleting a single Experience entity.
type ExperienceDeleteOne struct {
	ed *ExperienceDelete
}

// Where appends a list predicates to the ExperienceDelete builder.
func (edo *ExperienceDeleteOne) Where(ps ...predicate.Experience) *ExperienceDeleteOne {
	edo.ed.mutation.Where(ps...)
	return edo
}

// Exec executes the deletion query.
func (edo *ExperienceDeleteOne) Exec(ctx context.Context) error {
	n, err := edo.ed.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{experience.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (edo *ExperienceDeleteOne) ExecX(ctx context.Context) {
	if err := edo.Exec(ctx); err != nil {
		panic(err)
	}
}
