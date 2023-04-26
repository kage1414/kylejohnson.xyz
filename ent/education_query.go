// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"
	"kylejohnson-xyz/ent/education"
	"kylejohnson-xyz/ent/predicate"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// EducationQuery is the builder for querying Education entities.
type EducationQuery struct {
	config
	ctx        *QueryContext
	order      []education.OrderOption
	inters     []Interceptor
	predicates []predicate.Education
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the EducationQuery builder.
func (eq *EducationQuery) Where(ps ...predicate.Education) *EducationQuery {
	eq.predicates = append(eq.predicates, ps...)
	return eq
}

// Limit the number of records to be returned by this query.
func (eq *EducationQuery) Limit(limit int) *EducationQuery {
	eq.ctx.Limit = &limit
	return eq
}

// Offset to start from.
func (eq *EducationQuery) Offset(offset int) *EducationQuery {
	eq.ctx.Offset = &offset
	return eq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (eq *EducationQuery) Unique(unique bool) *EducationQuery {
	eq.ctx.Unique = &unique
	return eq
}

// Order specifies how the records should be ordered.
func (eq *EducationQuery) Order(o ...education.OrderOption) *EducationQuery {
	eq.order = append(eq.order, o...)
	return eq
}

// First returns the first Education entity from the query.
// Returns a *NotFoundError when no Education was found.
func (eq *EducationQuery) First(ctx context.Context) (*Education, error) {
	nodes, err := eq.Limit(1).All(setContextOp(ctx, eq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{education.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (eq *EducationQuery) FirstX(ctx context.Context) *Education {
	node, err := eq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first Education ID from the query.
// Returns a *NotFoundError when no Education ID was found.
func (eq *EducationQuery) FirstID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = eq.Limit(1).IDs(setContextOp(ctx, eq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{education.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (eq *EducationQuery) FirstIDX(ctx context.Context) int {
	id, err := eq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single Education entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one Education entity is found.
// Returns a *NotFoundError when no Education entities are found.
func (eq *EducationQuery) Only(ctx context.Context) (*Education, error) {
	nodes, err := eq.Limit(2).All(setContextOp(ctx, eq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{education.Label}
	default:
		return nil, &NotSingularError{education.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (eq *EducationQuery) OnlyX(ctx context.Context) *Education {
	node, err := eq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only Education ID in the query.
// Returns a *NotSingularError when more than one Education ID is found.
// Returns a *NotFoundError when no entities are found.
func (eq *EducationQuery) OnlyID(ctx context.Context) (id int, err error) {
	var ids []int
	if ids, err = eq.Limit(2).IDs(setContextOp(ctx, eq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{education.Label}
	default:
		err = &NotSingularError{education.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (eq *EducationQuery) OnlyIDX(ctx context.Context) int {
	id, err := eq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of Educations.
func (eq *EducationQuery) All(ctx context.Context) ([]*Education, error) {
	ctx = setContextOp(ctx, eq.ctx, "All")
	if err := eq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*Education, *EducationQuery]()
	return withInterceptors[[]*Education](ctx, eq, qr, eq.inters)
}

// AllX is like All, but panics if an error occurs.
func (eq *EducationQuery) AllX(ctx context.Context) []*Education {
	nodes, err := eq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of Education IDs.
func (eq *EducationQuery) IDs(ctx context.Context) (ids []int, err error) {
	if eq.ctx.Unique == nil && eq.path != nil {
		eq.Unique(true)
	}
	ctx = setContextOp(ctx, eq.ctx, "IDs")
	if err = eq.Select(education.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (eq *EducationQuery) IDsX(ctx context.Context) []int {
	ids, err := eq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (eq *EducationQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, eq.ctx, "Count")
	if err := eq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, eq, querierCount[*EducationQuery](), eq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (eq *EducationQuery) CountX(ctx context.Context) int {
	count, err := eq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (eq *EducationQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, eq.ctx, "Exist")
	switch _, err := eq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (eq *EducationQuery) ExistX(ctx context.Context) bool {
	exist, err := eq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the EducationQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (eq *EducationQuery) Clone() *EducationQuery {
	if eq == nil {
		return nil
	}
	return &EducationQuery{
		config:     eq.config,
		ctx:        eq.ctx.Clone(),
		order:      append([]education.OrderOption{}, eq.order...),
		inters:     append([]Interceptor{}, eq.inters...),
		predicates: append([]predicate.Education{}, eq.predicates...),
		// clone intermediate query.
		sql:  eq.sql.Clone(),
		path: eq.path,
	}
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		School string `json:"school,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.Education.Query().
//		GroupBy(education.FieldSchool).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (eq *EducationQuery) GroupBy(field string, fields ...string) *EducationGroupBy {
	eq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &EducationGroupBy{build: eq}
	grbuild.flds = &eq.ctx.Fields
	grbuild.label = education.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		School string `json:"school,omitempty"`
//	}
//
//	client.Education.Query().
//		Select(education.FieldSchool).
//		Scan(ctx, &v)
//
func (eq *EducationQuery) Select(fields ...string) *EducationSelect {
	eq.ctx.Fields = append(eq.ctx.Fields, fields...)
	sbuild := &EducationSelect{EducationQuery: eq}
	sbuild.label = education.Label
	sbuild.flds, sbuild.scan = &eq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a EducationSelect configured with the given aggregations.
func (eq *EducationQuery) Aggregate(fns ...AggregateFunc) *EducationSelect {
	return eq.Select().Aggregate(fns...)
}

func (eq *EducationQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range eq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, eq); err != nil {
				return err
			}
		}
	}
	for _, f := range eq.ctx.Fields {
		if !education.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if eq.path != nil {
		prev, err := eq.path(ctx)
		if err != nil {
			return err
		}
		eq.sql = prev
	}
	return nil
}

func (eq *EducationQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*Education, error) {
	var (
		nodes = []*Education{}
		_spec = eq.querySpec()
	)
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*Education).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &Education{config: eq.config}
		nodes = append(nodes, node)
		return node.assignValues(columns, values)
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, eq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	return nodes, nil
}

func (eq *EducationQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := eq.querySpec()
	_spec.Node.Columns = eq.ctx.Fields
	if len(eq.ctx.Fields) > 0 {
		_spec.Unique = eq.ctx.Unique != nil && *eq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, eq.driver, _spec)
}

func (eq *EducationQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := sqlgraph.NewQuerySpec(education.Table, education.Columns, sqlgraph.NewFieldSpec(education.FieldID, field.TypeInt))
	_spec.From = eq.sql
	if unique := eq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	} else if eq.path != nil {
		_spec.Unique = true
	}
	if fields := eq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, education.FieldID)
		for i := range fields {
			if fields[i] != education.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := eq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := eq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := eq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := eq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (eq *EducationQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(eq.driver.Dialect())
	t1 := builder.Table(education.Table)
	columns := eq.ctx.Fields
	if len(columns) == 0 {
		columns = education.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if eq.sql != nil {
		selector = eq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if eq.ctx.Unique != nil && *eq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range eq.predicates {
		p(selector)
	}
	for _, p := range eq.order {
		p(selector)
	}
	if offset := eq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := eq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// EducationGroupBy is the group-by builder for Education entities.
type EducationGroupBy struct {
	selector
	build *EducationQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (egb *EducationGroupBy) Aggregate(fns ...AggregateFunc) *EducationGroupBy {
	egb.fns = append(egb.fns, fns...)
	return egb
}

// Scan applies the selector query and scans the result into the given value.
func (egb *EducationGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, egb.build.ctx, "GroupBy")
	if err := egb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*EducationQuery, *EducationGroupBy](ctx, egb.build, egb, egb.build.inters, v)
}

func (egb *EducationGroupBy) sqlScan(ctx context.Context, root *EducationQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(egb.fns))
	for _, fn := range egb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*egb.flds)+len(egb.fns))
		for _, f := range *egb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*egb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := egb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// EducationSelect is the builder for selecting fields of Education entities.
type EducationSelect struct {
	*EducationQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (es *EducationSelect) Aggregate(fns ...AggregateFunc) *EducationSelect {
	es.fns = append(es.fns, fns...)
	return es
}

// Scan applies the selector query and scans the result into the given value.
func (es *EducationSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, es.ctx, "Select")
	if err := es.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*EducationQuery, *EducationSelect](ctx, es.EducationQuery, es, es.inters, v)
}

func (es *EducationSelect) sqlScan(ctx context.Context, root *EducationQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(es.fns))
	for _, fn := range es.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*es.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := es.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
