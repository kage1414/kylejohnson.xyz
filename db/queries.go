package db

import (
	"context"
	"kylejohnson-xyz/ent"
)

type TAddApplication struct {
	name string
	url string
	priority int32
	active bool
}
func AddApplication(ctx context.Context, client *ent.Client, p TAddApplication) *ent.Application {
	a := client.Application.Create().SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetActive(p.active).SaveX(ctx)
	return a
}

type TAddApplicationDescription struct {
	application_id int
	description_id int
}

func AddApplicationDescription(ctx context.Context, client *ent.Client, p TAddApplicationDescription) *ent.Application {
	t := client.Application.UpdateOneID(p.application_id).AddDescriptionIDs(p.description_id).SaveX(ctx)
	return t
}

type TAddApplicationTechnology struct {
	id int
	name string
}

func AddApplicationTechnology(ctx context.Context, client *ent.Client, p TAddApplicationTechnology) *ent.Technology {
	t := client.Technology.Create().SetName(p.name).SaveX(ctx)
	client.Application.UpdateOneID(p.id).AddTechnologies(t).SaveX(ctx)
	return t
}

type TDeleteApplication struct {
	id int
}

func DeleteApplication(ctx context.Context, client *ent.Client, p TDeleteApplication) {
	 client.Application.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllApplications(ctx context.Context, client *ent.Client) []*ent.Application {
	items, _ := client.Application.Query().All(ctx)
	return items
}

type TRemoveApplicationTechnology struct {
	id int
	technology_id int
}

func RemoveApplicationTechnology(ctx context.Context, client *ent.Client, p TRemoveApplicationTechnology) *ent.Application {
	a := client.Application.UpdateOneID(p.id).RemoveTechnologyIDs(p.technology_id).SaveX(ctx)
	return a;
}

type TUpdateApplication struct {
	id int
	name string
	url string
	priority int32
	active bool
}

func UpdateTechnology(ctx context.Context, client *ent.Client, p TUpdateApplication) *ent.Application {
	a := client.Application.UpdateOneID(p.id).SetName(p.name).SetURL(p.url).SetPriority(p.priority).SetActive(p.active).SaveX(ctx)
	return a
}

type TAddDescription struct {
	description string
}

func AddDescription(ctx context.Context, client *ent.Client, p TAddDescription) *ent.Description {
	d := client.Description.Create().SetDescription(p.description).SaveX(ctx)
	return d
}

type TDeleteDescription struct {
	id int
}

func DeleteDescription(ctx context.Context, client *ent.Client, p TDeleteDescription) {
	client.Description.DeleteOneID(p.id).ExecX(ctx)
}

type TGetDescription struct {
	id int
}

func GetDescription(ctx context.Context, client *ent.Client, p TGetDescription) *ent.Description {
	d, _ := client.Description.Get(ctx, p.id)
	return d
}

type TUpdateDescription struct {
	id int
	description string
	priority int32
}

func UpdateDescription(ctx context.Context, client *ent.Client, p TUpdateDescription) *ent.Description {
	d := client.Description.UpdateOneID(p.id).SetDescription(p.description).SetPriority(p.priority).SaveX(ctx)
	return d
}

type TAddEducation struct {
	school string
	time string
	certificate string
	degree string
	active bool
	priority int32
}

func AddEducation(ctx context.Context, client *ent.Client, p TAddEducation) *ent.Education {
	e := client.Education.Create().SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}

type TDeleteEducation struct {
	id int
}

func DeleteEducation(ctx context.Context, client *ent.Client, p TDeleteEducation) {
	client.Education.DeleteOneID(p.id).ExecX(ctx)
}

func GetAllEducations(ctx context.Context, client *ent.Client) []*ent.Education {
	items, _ := client.Education.Query().All(ctx)
	return items
}

type TUpdateEducation struct {
	id int
	school string
	time string
	certificate string
	degree string
	active bool
	priority int32
}

func UpdateEducation(ctx context.Context, client *ent.Client, p TUpdateEducation) *ent.Education {
	e := client.Education.UpdateOneID(p.id).SetSchool(p.school).SetNillableTime(&p.time).SetNillableCertificate(&p.certificate).SetNillableDegree(&p.degree).SetNillableActive(&p.active).SetNillablePriority(&p.priority).SaveX(ctx)
	return e
}
