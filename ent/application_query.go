// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"database/sql/driver"
	"fmt"
	"kylejohnson-xyz/ent/application"
	"kylejohnson-xyz/ent/description"
	"kylejohnson-xyz/ent/predicate"
	"kylejohnson-xyz/ent/technology"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// ApplicationQuery is the builder for querying Application entities.
type ApplicationQuery struct {
	config
	ctx              *QueryContext
	order            []application.OrderOption
	inters           []Interceptor
	predicates       []predicate.Application
	withDescriptions *DescriptionQuery
	withTechnologies *TechnologyQuery
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the ApplicationQuery builder.
func (aq *ApplicationQuery) Where(ps ...predicate.Application) *ApplicationQuery {
	aq.predicates = append(aq.predicates, ps...)
	return aq
}

// Limit the number of records to be returned by this query.
func (aq *ApplicationQuery) Limit(limit int) *ApplicationQuery {
	aq.ctx.Limit = &limit
	return aq
}

// Offset to start from.
func (aq *ApplicationQuery) Offset(offset int) *ApplicationQuery {
	aq.ctx.Offset = &offset
	return aq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (aq *ApplicationQuery) Unique(unique bool) *ApplicationQuery {
	aq.ctx.Unique = &unique
	return aq
}

// Order specifies how the records should be ordered.
func (aq *ApplicationQuery) Order(o ...application.OrderOption) *ApplicationQuery {
	aq.order = append(aq.order, o...)
	return aq
}

// QueryDescriptions chains the current query on the "descriptions" edge.
func (aq *ApplicationQuery) QueryDescriptions() *DescriptionQuery {
	query := (&DescriptionClient{config: aq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := aq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := aq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(application.Table, application.FieldID, selector),
			sqlgraph.To(description.Table, description.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, application.DescriptionsTable, application.DescriptionsColumn),
		)
		fromU = sqlgraph.SetNeighbors(aq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// QueryTechnologies chains the current query on the "technologies" edge.
func (aq *ApplicationQuery) QueryTechnologies() *TechnologyQuery {
	query := (&TechnologyClient{config: aq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := aq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := aq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(application.Table, application.FieldID, selector),
			sqlgraph.To(technology.Table, technology.FieldID),
			sqlgraph.Edge(sqlgraph.M2M, false, application.TechnologiesTable, application.TechnologiesPrimaryKey...),
		)
		fromU = sqlgraph.SetNeighbors(aq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first Application entity from the query.
// Returns a *NotFoundError when no Application was found.
func (aq *ApplicationQuery) First(ctx context.Context) (*Application, error) {
	nodes, err := aq.Limit(1).All(setContextOp(ctx, aq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{application.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (aq *ApplicationQuery) FirstX(ctx context.Context) *Application {
	node, err := aq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first Application ID from the query.
// Returns a *NotFoundError when no Application ID was found.
func (aq *ApplicationQuery) FirstID(ctx context.Context) (id uuid.UUID, err error) {
	var ids []uuid.UUID
	if ids, err = aq.Limit(1).IDs(setContextOp(ctx, aq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{application.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (aq *ApplicationQuery) FirstIDX(ctx context.Context) uuid.UUID {
	id, err := aq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single Application entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one Application entity is found.
// Returns a *NotFoundError when no Application entities are found.
func (aq *ApplicationQuery) Only(ctx context.Context) (*Application, error) {
	nodes, err := aq.Limit(2).All(setContextOp(ctx, aq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{application.Label}
	default:
		return nil, &NotSingularError{application.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (aq *ApplicationQuery) OnlyX(ctx context.Context) *Application {
	node, err := aq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only Application ID in the query.
// Returns a *NotSingularError when more than one Application ID is found.
// Returns a *NotFoundError when no entities are found.
func (aq *ApplicationQuery) OnlyID(ctx context.Context) (id uuid.UUID, err error) {
	var ids []uuid.UUID
	if ids, err = aq.Limit(2).IDs(setContextOp(ctx, aq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{application.Label}
	default:
		err = &NotSingularError{application.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (aq *ApplicationQuery) OnlyIDX(ctx context.Context) uuid.UUID {
	id, err := aq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of Applications.
func (aq *ApplicationQuery) All(ctx context.Context) ([]*Application, error) {
	ctx = setContextOp(ctx, aq.ctx, "All")
	if err := aq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*Application, *ApplicationQuery]()
	return withInterceptors[[]*Application](ctx, aq, qr, aq.inters)
}

// AllX is like All, but panics if an error occurs.
func (aq *ApplicationQuery) AllX(ctx context.Context) []*Application {
	nodes, err := aq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of Application IDs.
func (aq *ApplicationQuery) IDs(ctx context.Context) (ids []uuid.UUID, err error) {
	if aq.ctx.Unique == nil && aq.path != nil {
		aq.Unique(true)
	}
	ctx = setContextOp(ctx, aq.ctx, "IDs")
	if err = aq.Select(application.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (aq *ApplicationQuery) IDsX(ctx context.Context) []uuid.UUID {
	ids, err := aq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (aq *ApplicationQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, aq.ctx, "Count")
	if err := aq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, aq, querierCount[*ApplicationQuery](), aq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (aq *ApplicationQuery) CountX(ctx context.Context) int {
	count, err := aq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (aq *ApplicationQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, aq.ctx, "Exist")
	switch _, err := aq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (aq *ApplicationQuery) ExistX(ctx context.Context) bool {
	exist, err := aq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the ApplicationQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (aq *ApplicationQuery) Clone() *ApplicationQuery {
	if aq == nil {
		return nil
	}
	return &ApplicationQuery{
		config:           aq.config,
		ctx:              aq.ctx.Clone(),
		order:            append([]application.OrderOption{}, aq.order...),
		inters:           append([]Interceptor{}, aq.inters...),
		predicates:       append([]predicate.Application{}, aq.predicates...),
		withDescriptions: aq.withDescriptions.Clone(),
		withTechnologies: aq.withTechnologies.Clone(),
		// clone intermediate query.
		sql:  aq.sql.Clone(),
		path: aq.path,
	}
}

// WithDescriptions tells the query-builder to eager-load the nodes that are connected to
// the "descriptions" edge. The optional arguments are used to configure the query builder of the edge.
func (aq *ApplicationQuery) WithDescriptions(opts ...func(*DescriptionQuery)) *ApplicationQuery {
	query := (&DescriptionClient{config: aq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	aq.withDescriptions = query
	return aq
}

// WithTechnologies tells the query-builder to eager-load the nodes that are connected to
// the "technologies" edge. The optional arguments are used to configure the query builder of the edge.
func (aq *ApplicationQuery) WithTechnologies(opts ...func(*TechnologyQuery)) *ApplicationQuery {
	query := (&TechnologyClient{config: aq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	aq.withTechnologies = query
	return aq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.Application.Query().
//		GroupBy(application.FieldName).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
func (aq *ApplicationQuery) GroupBy(field string, fields ...string) *ApplicationGroupBy {
	aq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &ApplicationGroupBy{build: aq}
	grbuild.flds = &aq.ctx.Fields
	grbuild.label = application.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//	}
//
//	client.Application.Query().
//		Select(application.FieldName).
//		Scan(ctx, &v)
func (aq *ApplicationQuery) Select(fields ...string) *ApplicationSelect {
	aq.ctx.Fields = append(aq.ctx.Fields, fields...)
	sbuild := &ApplicationSelect{ApplicationQuery: aq}
	sbuild.label = application.Label
	sbuild.flds, sbuild.scan = &aq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a ApplicationSelect configured with the given aggregations.
func (aq *ApplicationQuery) Aggregate(fns ...AggregateFunc) *ApplicationSelect {
	return aq.Select().Aggregate(fns...)
}

func (aq *ApplicationQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range aq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, aq); err != nil {
				return err
			}
		}
	}
	for _, f := range aq.ctx.Fields {
		if !application.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if aq.path != nil {
		prev, err := aq.path(ctx)
		if err != nil {
			return err
		}
		aq.sql = prev
	}
	return nil
}

func (aq *ApplicationQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*Application, error) {
	var (
		nodes       = []*Application{}
		_spec       = aq.querySpec()
		loadedTypes = [2]bool{
			aq.withDescriptions != nil,
			aq.withTechnologies != nil,
		}
	)
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*Application).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &Application{config: aq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, aq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := aq.withDescriptions; query != nil {
		if err := aq.loadDescriptions(ctx, query, nodes,
			func(n *Application) { n.Edges.Descriptions = []*Description{} },
			func(n *Application, e *Description) { n.Edges.Descriptions = append(n.Edges.Descriptions, e) }); err != nil {
			return nil, err
		}
	}
	if query := aq.withTechnologies; query != nil {
		if err := aq.loadTechnologies(ctx, query, nodes,
			func(n *Application) { n.Edges.Technologies = []*Technology{} },
			func(n *Application, e *Technology) { n.Edges.Technologies = append(n.Edges.Technologies, e) }); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (aq *ApplicationQuery) loadDescriptions(ctx context.Context, query *DescriptionQuery, nodes []*Application, init func(*Application), assign func(*Application, *Description)) error {
	fks := make([]driver.Value, 0, len(nodes))
	nodeids := make(map[uuid.UUID]*Application)
	for i := range nodes {
		fks = append(fks, nodes[i].ID)
		nodeids[nodes[i].ID] = nodes[i]
		if init != nil {
			init(nodes[i])
		}
	}
	query.withFKs = true
	query.Where(predicate.Description(func(s *sql.Selector) {
		s.Where(sql.InValues(s.C(application.DescriptionsColumn), fks...))
	}))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		fk := n.application_descriptions
		if fk == nil {
			return fmt.Errorf(`foreign-key "application_descriptions" is nil for node %v`, n.ID)
		}
		node, ok := nodeids[*fk]
		if !ok {
			return fmt.Errorf(`unexpected referenced foreign-key "application_descriptions" returned %v for node %v`, *fk, n.ID)
		}
		assign(node, n)
	}
	return nil
}
func (aq *ApplicationQuery) loadTechnologies(ctx context.Context, query *TechnologyQuery, nodes []*Application, init func(*Application), assign func(*Application, *Technology)) error {
	edgeIDs := make([]driver.Value, len(nodes))
	byID := make(map[uuid.UUID]*Application)
	nids := make(map[uuid.UUID]map[*Application]struct{})
	for i, node := range nodes {
		edgeIDs[i] = node.ID
		byID[node.ID] = node
		if init != nil {
			init(node)
		}
	}
	query.Where(func(s *sql.Selector) {
		joinT := sql.Table(application.TechnologiesTable)
		s.Join(joinT).On(s.C(technology.FieldID), joinT.C(application.TechnologiesPrimaryKey[1]))
		s.Where(sql.InValues(joinT.C(application.TechnologiesPrimaryKey[0]), edgeIDs...))
		columns := s.SelectedColumns()
		s.Select(joinT.C(application.TechnologiesPrimaryKey[0]))
		s.AppendSelect(columns...)
		s.SetDistinct(false)
	})
	if err := query.prepareQuery(ctx); err != nil {
		return err
	}
	qr := QuerierFunc(func(ctx context.Context, q Query) (Value, error) {
		return query.sqlAll(ctx, func(_ context.Context, spec *sqlgraph.QuerySpec) {
			assign := spec.Assign
			values := spec.ScanValues
			spec.ScanValues = func(columns []string) ([]any, error) {
				values, err := values(columns[1:])
				if err != nil {
					return nil, err
				}
				return append([]any{new(uuid.UUID)}, values...), nil
			}
			spec.Assign = func(columns []string, values []any) error {
				outValue := *values[0].(*uuid.UUID)
				inValue := *values[1].(*uuid.UUID)
				if nids[inValue] == nil {
					nids[inValue] = map[*Application]struct{}{byID[outValue]: {}}
					return assign(columns[1:], values[1:])
				}
				nids[inValue][byID[outValue]] = struct{}{}
				return nil
			}
		})
	})
	neighbors, err := withInterceptors[[]*Technology](ctx, query, qr, query.inters)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected "technologies" node returned %v`, n.ID)
		}
		for kn := range nodes {
			assign(kn, n)
		}
	}
	return nil
}

func (aq *ApplicationQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := aq.querySpec()
	_spec.Node.Columns = aq.ctx.Fields
	if len(aq.ctx.Fields) > 0 {
		_spec.Unique = aq.ctx.Unique != nil && *aq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, aq.driver, _spec)
}

func (aq *ApplicationQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := sqlgraph.NewQuerySpec(application.Table, application.Columns, sqlgraph.NewFieldSpec(application.FieldID, field.TypeUUID))
	_spec.From = aq.sql
	if unique := aq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	} else if aq.path != nil {
		_spec.Unique = true
	}
	if fields := aq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, application.FieldID)
		for i := range fields {
			if fields[i] != application.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := aq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := aq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := aq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := aq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (aq *ApplicationQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(aq.driver.Dialect())
	t1 := builder.Table(application.Table)
	columns := aq.ctx.Fields
	if len(columns) == 0 {
		columns = application.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if aq.sql != nil {
		selector = aq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if aq.ctx.Unique != nil && *aq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range aq.predicates {
		p(selector)
	}
	for _, p := range aq.order {
		p(selector)
	}
	if offset := aq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := aq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// ApplicationGroupBy is the group-by builder for Application entities.
type ApplicationGroupBy struct {
	selector
	build *ApplicationQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (agb *ApplicationGroupBy) Aggregate(fns ...AggregateFunc) *ApplicationGroupBy {
	agb.fns = append(agb.fns, fns...)
	return agb
}

// Scan applies the selector query and scans the result into the given value.
func (agb *ApplicationGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, agb.build.ctx, "GroupBy")
	if err := agb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*ApplicationQuery, *ApplicationGroupBy](ctx, agb.build, agb, agb.build.inters, v)
}

func (agb *ApplicationGroupBy) sqlScan(ctx context.Context, root *ApplicationQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(agb.fns))
	for _, fn := range agb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*agb.flds)+len(agb.fns))
		for _, f := range *agb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*agb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := agb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// ApplicationSelect is the builder for selecting fields of Application entities.
type ApplicationSelect struct {
	*ApplicationQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (as *ApplicationSelect) Aggregate(fns ...AggregateFunc) *ApplicationSelect {
	as.fns = append(as.fns, fns...)
	return as
}

// Scan applies the selector query and scans the result into the given value.
func (as *ApplicationSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, as.ctx, "Select")
	if err := as.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*ApplicationQuery, *ApplicationSelect](ctx, as.ApplicationQuery, as, as.inters, v)
}

func (as *ApplicationSelect) sqlScan(ctx context.Context, root *ApplicationQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(as.fns))
	for _, fn := range as.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*as.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := as.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
