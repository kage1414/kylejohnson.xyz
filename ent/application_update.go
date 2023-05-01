// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/predicate"
	"kylejohnson-xyz/ent/technology"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// ApplicationUpdate is the builder for updating Application entities.
type ApplicationUpdate struct {
	config
	hooks    []Hook
	mutation *ApplicationMutation
}

// Where appends a list predicates to the ApplicationUpdate builder.
func (au *ApplicationUpdate) Where(ps ...predicate.Application) *ApplicationUpdate {
	au.mutation.Where(ps...)
	return au
}

// SetName sets the "name" field.
func (au *ApplicationUpdate) SetName(s string) *ApplicationUpdate {
	au.mutation.SetName(s)
	return au
}

// SetNillableName sets the "name" field if the given value is not nil.
func (au *ApplicationUpdate) SetNillableName(s *string) *ApplicationUpdate {
	if s != nil {
		au.SetName(*s)
	}
	return au
}

// ClearName clears the value of the "name" field.
func (au *ApplicationUpdate) ClearName() *ApplicationUpdate {
	au.mutation.ClearName()
	return au
}

// SetURL sets the "url" field.
func (au *ApplicationUpdate) SetURL(s string) *ApplicationUpdate {
	au.mutation.SetURL(s)
	return au
}

// SetNillableURL sets the "url" field if the given value is not nil.
func (au *ApplicationUpdate) SetNillableURL(s *string) *ApplicationUpdate {
	if s != nil {
		au.SetURL(*s)
	}
	return au
}

// ClearURL clears the value of the "url" field.
func (au *ApplicationUpdate) ClearURL() *ApplicationUpdate {
	au.mutation.ClearURL()
	return au
}

// SetActive sets the "active" field.
func (au *ApplicationUpdate) SetActive(b bool) *ApplicationUpdate {
	au.mutation.SetActive(b)
	return au
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (au *ApplicationUpdate) SetNillableActive(b *bool) *ApplicationUpdate {
	if b != nil {
		au.SetActive(*b)
	}
	return au
}

// ClearActive clears the value of the "active" field.
func (au *ApplicationUpdate) ClearActive() *ApplicationUpdate {
	au.mutation.ClearActive()
	return au
}

// SetPriority sets the "priority" field.
func (au *ApplicationUpdate) SetPriority(i int32) *ApplicationUpdate {
	au.mutation.ResetPriority()
	au.mutation.SetPriority(i)
	return au
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (au *ApplicationUpdate) SetNillablePriority(i *int32) *ApplicationUpdate {
	if i != nil {
		au.SetPriority(*i)
	}
	return au
}

// AddPriority adds i to the "priority" field.
func (au *ApplicationUpdate) AddPriority(i int32) *ApplicationUpdate {
	au.mutation.AddPriority(i)
	return au
}

// ClearPriority clears the value of the "priority" field.
func (au *ApplicationUpdate) ClearPriority() *ApplicationUpdate {
	au.mutation.ClearPriority()
	return au
}

// AddDescriptionIDs adds the "descriptions" edge to the Description entity by IDs.
func (au *ApplicationUpdate) AddDescriptionIDs(ids ...int) *ApplicationUpdate {
	au.mutation.AddDescriptionIDs(ids...)
	return au
}

// AddDescriptions adds the "descriptions" edges to the Description entity.
func (au *ApplicationUpdate) AddDescriptions(d ...*Description) *ApplicationUpdate {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return au.AddDescriptionIDs(ids...)
}

// AddTechnologyIDs adds the "technologies" edge to the Technology entity by IDs.
func (au *ApplicationUpdate) AddTechnologyIDs(ids ...int) *ApplicationUpdate {
	au.mutation.AddTechnologyIDs(ids...)
	return au
}

// AddTechnologies adds the "technologies" edges to the Technology entity.
func (au *ApplicationUpdate) AddTechnologies(t ...*Technology) *ApplicationUpdate {
	ids := make([]int, len(t))
	for i := range t {
		ids[i] = t[i].ID
	}
	return au.AddTechnologyIDs(ids...)
}

// Mutation returns the ApplicationMutation object of the builder.
func (au *ApplicationUpdate) Mutation() *ApplicationMutation {
	return au.mutation
}

// ClearDescriptions clears all "descriptions" edges to the Description entity.
func (au *ApplicationUpdate) ClearDescriptions() *ApplicationUpdate {
	au.mutation.ClearDescriptions()
	return au
}

// RemoveDescriptionIDs removes the "descriptions" edge to Description entities by IDs.
func (au *ApplicationUpdate) RemoveDescriptionIDs(ids ...int) *ApplicationUpdate {
	au.mutation.RemoveDescriptionIDs(ids...)
	return au
}

// RemoveDescriptions removes "descriptions" edges to Description entities.
func (au *ApplicationUpdate) RemoveDescriptions(d ...*Description) *ApplicationUpdate {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return au.RemoveDescriptionIDs(ids...)
}

// ClearTechnologies clears all "technologies" edges to the Technology entity.
func (au *ApplicationUpdate) ClearTechnologies() *ApplicationUpdate {
	au.mutation.ClearTechnologies()
	return au
}

// RemoveTechnologyIDs removes the "technologies" edge to Technology entities by IDs.
func (au *ApplicationUpdate) RemoveTechnologyIDs(ids ...int) *ApplicationUpdate {
	au.mutation.RemoveTechnologyIDs(ids...)
	return au
}

// RemoveTechnologies removes "technologies" edges to Technology entities.
func (au *ApplicationUpdate) RemoveTechnologies(t ...*Technology) *ApplicationUpdate {
	ids := make([]int, len(t))
	for i := range t {
		ids[i] = t[i].ID
	}
	return au.RemoveTechnologyIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (au *ApplicationUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, ApplicationMutation](ctx, au.sqlSave, au.mutation, au.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (au *ApplicationUpdate) SaveX(ctx context.Context) int {
	affected, err := au.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (au *ApplicationUpdate) Exec(ctx context.Context) error {
	_, err := au.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (au *ApplicationUpdate) ExecX(ctx context.Context) {
	if err := au.Exec(ctx); err != nil {
		panic(err)
	}
}

func (au *ApplicationUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(application.Table, application.Columns, sqlgraph.NewFieldSpec(application.FieldID, field.TypeInt))
	if ps := au.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := au.mutation.Name(); ok {
		_spec.SetField(application.FieldName, field.TypeString, value)
	}
	if au.mutation.NameCleared() {
		_spec.ClearField(application.FieldName, field.TypeString)
	}
	if value, ok := au.mutation.URL(); ok {
		_spec.SetField(application.FieldURL, field.TypeString, value)
	}
	if au.mutation.URLCleared() {
		_spec.ClearField(application.FieldURL, field.TypeString)
	}
	if value, ok := au.mutation.Active(); ok {
		_spec.SetField(application.FieldActive, field.TypeBool, value)
	}
	if au.mutation.ActiveCleared() {
		_spec.ClearField(application.FieldActive, field.TypeBool)
	}
	if value, ok := au.mutation.Priority(); ok {
		_spec.SetField(application.FieldPriority, field.TypeInt32, value)
	}
	if value, ok := au.mutation.AddedPriority(); ok {
		_spec.AddField(application.FieldPriority, field.TypeInt32, value)
	}
	if au.mutation.PriorityCleared() {
		_spec.ClearField(application.FieldPriority, field.TypeInt32)
	}
	if au.mutation.DescriptionsCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.RemovedDescriptionsIDs(); len(nodes) > 0 && !au.mutation.DescriptionsCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.DescriptionsIDs(); len(nodes) > 0 {
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if au.mutation.TechnologiesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.RemovedTechnologiesIDs(); len(nodes) > 0 && !au.mutation.TechnologiesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.TechnologiesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, au.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{application.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	au.mutation.done = true
	return n, nil
}

// ApplicationUpdateOne is the builder for updating a single Application entity.
type ApplicationUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *ApplicationMutation
}

// SetName sets the "name" field.
func (auo *ApplicationUpdateOne) SetName(s string) *ApplicationUpdateOne {
	auo.mutation.SetName(s)
	return auo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (auo *ApplicationUpdateOne) SetNillableName(s *string) *ApplicationUpdateOne {
	if s != nil {
		auo.SetName(*s)
	}
	return auo
}

// ClearName clears the value of the "name" field.
func (auo *ApplicationUpdateOne) ClearName() *ApplicationUpdateOne {
	auo.mutation.ClearName()
	return auo
}

// SetURL sets the "url" field.
func (auo *ApplicationUpdateOne) SetURL(s string) *ApplicationUpdateOne {
	auo.mutation.SetURL(s)
	return auo
}

// SetNillableURL sets the "url" field if the given value is not nil.
func (auo *ApplicationUpdateOne) SetNillableURL(s *string) *ApplicationUpdateOne {
	if s != nil {
		auo.SetURL(*s)
	}
	return auo
}

// ClearURL clears the value of the "url" field.
func (auo *ApplicationUpdateOne) ClearURL() *ApplicationUpdateOne {
	auo.mutation.ClearURL()
	return auo
}

// SetActive sets the "active" field.
func (auo *ApplicationUpdateOne) SetActive(b bool) *ApplicationUpdateOne {
	auo.mutation.SetActive(b)
	return auo
}

// SetNillableActive sets the "active" field if the given value is not nil.
func (auo *ApplicationUpdateOne) SetNillableActive(b *bool) *ApplicationUpdateOne {
	if b != nil {
		auo.SetActive(*b)
	}
	return auo
}

// ClearActive clears the value of the "active" field.
func (auo *ApplicationUpdateOne) ClearActive() *ApplicationUpdateOne {
	auo.mutation.ClearActive()
	return auo
}

// SetPriority sets the "priority" field.
func (auo *ApplicationUpdateOne) SetPriority(i int32) *ApplicationUpdateOne {
	auo.mutation.ResetPriority()
	auo.mutation.SetPriority(i)
	return auo
}

// SetNillablePriority sets the "priority" field if the given value is not nil.
func (auo *ApplicationUpdateOne) SetNillablePriority(i *int32) *ApplicationUpdateOne {
	if i != nil {
		auo.SetPriority(*i)
	}
	return auo
}

// AddPriority adds i to the "priority" field.
func (auo *ApplicationUpdateOne) AddPriority(i int32) *ApplicationUpdateOne {
	auo.mutation.AddPriority(i)
	return auo
}

// ClearPriority clears the value of the "priority" field.
func (auo *ApplicationUpdateOne) ClearPriority() *ApplicationUpdateOne {
	auo.mutation.ClearPriority()
	return auo
}

// AddDescriptionIDs adds the "descriptions" edge to the Description entity by IDs.
func (auo *ApplicationUpdateOne) AddDescriptionIDs(ids ...int) *ApplicationUpdateOne {
	auo.mutation.AddDescriptionIDs(ids...)
	return auo
}

// AddDescriptions adds the "descriptions" edges to the Description entity.
func (auo *ApplicationUpdateOne) AddDescriptions(d ...*Description) *ApplicationUpdateOne {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return auo.AddDescriptionIDs(ids...)
}

// AddTechnologyIDs adds the "technologies" edge to the Technology entity by IDs.
func (auo *ApplicationUpdateOne) AddTechnologyIDs(ids ...int) *ApplicationUpdateOne {
	auo.mutation.AddTechnologyIDs(ids...)
	return auo
}

// AddTechnologies adds the "technologies" edges to the Technology entity.
func (auo *ApplicationUpdateOne) AddTechnologies(t ...*Technology) *ApplicationUpdateOne {
	ids := make([]int, len(t))
	for i := range t {
		ids[i] = t[i].ID
	}
	return auo.AddTechnologyIDs(ids...)
}

// Mutation returns the ApplicationMutation object of the builder.
func (auo *ApplicationUpdateOne) Mutation() *ApplicationMutation {
	return auo.mutation
}

// ClearDescriptions clears all "descriptions" edges to the Description entity.
func (auo *ApplicationUpdateOne) ClearDescriptions() *ApplicationUpdateOne {
	auo.mutation.ClearDescriptions()
	return auo
}

// RemoveDescriptionIDs removes the "descriptions" edge to Description entities by IDs.
func (auo *ApplicationUpdateOne) RemoveDescriptionIDs(ids ...int) *ApplicationUpdateOne {
	auo.mutation.RemoveDescriptionIDs(ids...)
	return auo
}

// RemoveDescriptions removes "descriptions" edges to Description entities.
func (auo *ApplicationUpdateOne) RemoveDescriptions(d ...*Description) *ApplicationUpdateOne {
	ids := make([]int, len(d))
	for i := range d {
		ids[i] = d[i].ID
	}
	return auo.RemoveDescriptionIDs(ids...)
}

// ClearTechnologies clears all "technologies" edges to the Technology entity.
func (auo *ApplicationUpdateOne) ClearTechnologies() *ApplicationUpdateOne {
	auo.mutation.ClearTechnologies()
	return auo
}

// RemoveTechnologyIDs removes the "technologies" edge to Technology entities by IDs.
func (auo *ApplicationUpdateOne) RemoveTechnologyIDs(ids ...int) *ApplicationUpdateOne {
	auo.mutation.RemoveTechnologyIDs(ids...)
	return auo
}

// RemoveTechnologies removes "technologies" edges to Technology entities.
func (auo *ApplicationUpdateOne) RemoveTechnologies(t ...*Technology) *ApplicationUpdateOne {
	ids := make([]int, len(t))
	for i := range t {
		ids[i] = t[i].ID
	}
	return auo.RemoveTechnologyIDs(ids...)
}

// Where appends a list predicates to the ApplicationUpdate builder.
func (auo *ApplicationUpdateOne) Where(ps ...predicate.Application) *ApplicationUpdateOne {
	auo.mutation.Where(ps...)
	return auo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (auo *ApplicationUpdateOne) Select(field string, fields ...string) *ApplicationUpdateOne {
	auo.fields = append([]string{field}, fields...)
	return auo
}

// Save executes the query and returns the updated Application entity.
func (auo *ApplicationUpdateOne) Save(ctx context.Context) (*Application, error) {
	return withHooks[*Application, ApplicationMutation](ctx, auo.sqlSave, auo.mutation, auo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (auo *ApplicationUpdateOne) SaveX(ctx context.Context) *Application {
	node, err := auo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (auo *ApplicationUpdateOne) Exec(ctx context.Context) error {
	_, err := auo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (auo *ApplicationUpdateOne) ExecX(ctx context.Context) {
	if err := auo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (auo *ApplicationUpdateOne) sqlSave(ctx context.Context) (_node *Application, err error) {
	_spec := sqlgraph.NewUpdateSpec(application.Table, application.Columns, sqlgraph.NewFieldSpec(application.FieldID, field.TypeInt))
	id, ok := auo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Application.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := auo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, application.FieldID)
		for _, f := range fields {
			if !application.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != application.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := auo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := auo.mutation.Name(); ok {
		_spec.SetField(application.FieldName, field.TypeString, value)
	}
	if auo.mutation.NameCleared() {
		_spec.ClearField(application.FieldName, field.TypeString)
	}
	if value, ok := auo.mutation.URL(); ok {
		_spec.SetField(application.FieldURL, field.TypeString, value)
	}
	if auo.mutation.URLCleared() {
		_spec.ClearField(application.FieldURL, field.TypeString)
	}
	if value, ok := auo.mutation.Active(); ok {
		_spec.SetField(application.FieldActive, field.TypeBool, value)
	}
	if auo.mutation.ActiveCleared() {
		_spec.ClearField(application.FieldActive, field.TypeBool)
	}
	if value, ok := auo.mutation.Priority(); ok {
		_spec.SetField(application.FieldPriority, field.TypeInt32, value)
	}
	if value, ok := auo.mutation.AddedPriority(); ok {
		_spec.AddField(application.FieldPriority, field.TypeInt32, value)
	}
	if auo.mutation.PriorityCleared() {
		_spec.ClearField(application.FieldPriority, field.TypeInt32)
	}
	if auo.mutation.DescriptionsCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.RemovedDescriptionsIDs(); len(nodes) > 0 && !auo.mutation.DescriptionsCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.DescriptionsIDs(); len(nodes) > 0 {
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if auo.mutation.TechnologiesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.RemovedTechnologiesIDs(); len(nodes) > 0 && !auo.mutation.TechnologiesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.TechnologiesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   application.TechnologiesTable,
			Columns: application.TechnologiesPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(technology.FieldID, field.TypeInt),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Application{config: auo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, auo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{application.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	auo.mutation.done = true
	return _node, nil
}
