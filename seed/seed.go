package seed

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"kylejohnson-xyz/ent"
	"kylejohnson-xyz/ent/technology"
	"log"

	"entgo.io/ent/dialect/sql"
)

type ttechnology struct {
	Name     string `json:"name"`
	Url      string `json:"url"`
	Priority int32  `json:"priority"`
}

type technicalSkill struct {
	Id           string        `json:"id"`
	Stack        string        `json:"stack"`
	Technologies []ttechnology `json:"technologies"`
}

type description struct {
	Description string `json:"description"`
	Priority    int32  `json:"priority"`
}

type application struct {
	Name         string        `json:"name"`
	Url          string        `json:"url"`
	Active       bool          `json:"active"`
	Priority     int32         `json:"priority"`
	Technologies []ttechnology `json:"technologies"`
	Descriptions []description `json:"descriptions"`
}

type experience struct {
	Employer     string        `json:"employer"`
	Position     string        `json:"position"`
	Active       bool          `json:"active"`
	Time         string        `json:"time"`
	Priority     int32         `json:"priority"`
	Descriptions []description `json:"descriptions"`
}

type education struct {
	School      string `json:"school"`
	Time        string `json:"time"`
	Certificate string `json:"certificate"`
	Degree      string `json:"degree"`
	Active      bool   `json:"active"`
	Priority    int32  `json:"priority"`
}

type TMockDb struct {
	TechnicalSkills []technicalSkill `json:"technical_skills"`
	Applications    []application    `json:"applications"`
	Experience      []experience     `json:"experience"`
	Education       []education      `json:"education"`
}

var mockDb TMockDb

func getMockDb() {
	content, err := ioutil.ReadFile("./mock-db.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}
	json.Unmarshal(content, &mockDb)
}

func deleteAllRecords(client *ent.Client, ctx context.Context) {
	fmt.Println("Dropping all tables...")
	client.Application.Delete().Where().ExecX(ctx)
	client.Technology.Delete().Where().ExecX(ctx)
	client.TechStack.Delete().Where().ExecX(ctx)
	client.Experience.Delete().Where().ExecX(ctx)
	client.Description.Delete().Where().ExecX(ctx)
	client.Education.Delete().Where().ExecX(ctx)
	fmt.Println("Tables dropped")
}

func seedExperience(client *ent.Client, ctx context.Context) {
	fmt.Println("Seeding experience...")
	for _, e := range mockDb.Experience {
		e_record := client.Experience.Create().SetEmployer(e.Employer).SetPosition(e.Position).SetTime(e.Time).SetNillableActive(&e.Active).SetNillablePriority(&e.Priority).SaveX(ctx)
		for _, d := range e.Descriptions {
			d_record := client.Description.Create().SetDescription(d.Description).SetNillablePriority(&d.Priority).SaveX(ctx)
			e_record.Update().AddDescriptions(d_record).SaveX(ctx)
		}
	}
	fmt.Println("Experience complete")
}

func seedApplication(client *ent.Client, ctx context.Context) {
	fmt.Println("Seeding applications...")
	for _, a := range mockDb.Applications {
		a_record := client.Application.Create().SetName(a.Name).SetURL(a.Url).SetNillableActive(&a.Active).SetNillablePriority(&a.Priority).SaveX(ctx)
		for _, d := range a.Descriptions {
			d_record := client.Description.Create().SetDescription(d.Description).SetNillablePriority(&d.Priority).SaveX(ctx)
			a_record.Update().AddDescriptions(d_record).SaveX(ctx)
		}
		for _, t := range a.Technologies {
			t_record, err := client.Technology.Create().SetName(t.Name).SetURL(t.Url).SetNillablePriority(&t.Priority).Save(ctx)
			if err != nil {
				existing_record := client.Technology.Query().Where(func(s *sql.Selector) {
					s.Where(sql.InValues(technology.FieldName, t.Name))
				}).FirstX(ctx)
				a_record.Update().AddTechnologies(existing_record).SaveX(ctx)
			} else {
				a_record.Update().AddTechnologies(t_record).SaveX(ctx)

			}
		}
	}
	fmt.Println("Applications complete")
}

// func seedTechStacks(client *ent.Client, ctx context.Context) {
// 	fmt.Println("Seeding tech stacks...")
// 	for _, t := range mockDb.TechnicalSkills {
// 		client.TechStack.Create().SetStack(t.Stack).Save(ctx)
// 	}
// 	fmt.Println("Tech stacks complete")
// }

func seedTechnology(client *ent.Client, ctx context.Context) {
	fmt.Println("Seeding technologies...")
	for _, s := range mockDb.TechnicalSkills {
		s_record := client.TechStack.Create().SetStack(s.Stack).SaveX(ctx)
		for _, t := range s.Technologies {
			client.Technology.Create().SetName(t.Name).SetStack(s_record).SetNillableURL(&t.Url).SetNillablePriority(&t.Priority).SaveX(ctx)
		}
	}
	fmt.Println("Technologies complete")
}

func seedEducation(client *ent.Client, ctx context.Context) {
	fmt.Println("Seeding education...")
	for _, e := range mockDb.Education {
		client.Education.Create().SetSchool(e.School).SetNillableTime(&e.Time).SetNillableCertificate(&e.Certificate).SetNillableDegree(&e.Degree).SetNillableActive(&e.Active).SetNillablePriority(&e.Priority).SaveX(ctx)
	}
	fmt.Println("Education complete")
}

func Seed(client *ent.Client, ctx context.Context) {
	deleteAllRecords(client, ctx)
	getMockDb()
	seedTechnology(client, ctx)
	seedExperience(client, ctx)
	seedEducation(client, ctx)
	seedApplication(client, ctx)
	fmt.Println("Seed complete")
}
