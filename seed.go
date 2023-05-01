package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"kylejohnson-xyz/ent"
	"log"
)

type technology struct {
	Name string `json:"name"`
	Url string `json:"url"`
	Priority int32 `json:"priority"`
}

type technicalSkill struct {
	Id string `json:"id"`
	Stack string `json:"stack"`
	Technologies []technology `json:"technologies"`
}

type description struct {
	Description string `json:"description"`
	Priority int32 `json:"priority"`
}

type application struct {
	Name string `json:"name"`
	Url string `json:"url"`
	Active bool `json:"active"`
	Priority int32 `json:"priority"`
	Technologies []technology `json:"technologies"`
	Descriptions []description `json:"descriptions"`
}

type experience struct {
	Employer string `json:"employer"`
	Position string `json:"position"`
	Active bool `json:"active"`
	Time string `json:"time"`
	Priority int32 `json:"priority"`
	Descriptions []description `json:"descriptions"`
}

type education struct {
	School string `json:"school"`
	Time string `json:"time"`
	Certificate string `json:"certificate"`
	Degree string `json:"degree"`
	Active bool `json:"active"`
	Priority int32 `json:"priority"`
}

type TMockDb struct {
	TechnicalSkills []technicalSkill `json:"technical_skills"`
	Applications []application `json:"applications"`
	Experience []experience `json:"experience"`
	Education []education `json:"education"`
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
		e_record := client.Experience.Create().SetEmployer(e.Employer).SetPosition(e.Position).SetTime(e.Time).SetActive(e.Active).SetPriority(e.Priority).SaveX(ctx)
		for _, d := range e.Descriptions {
			d_record := client.Description.Create().SetDescription(d.Description).SetPriority(d.Priority).SaveX(ctx)
			e_record.Update().AddDescriptions(d_record).SaveX(ctx)
		}
	}
	fmt.Println("Experience complete")
}

func Seed(client *ent.Client, ctx context.Context) {
	fmt.Println(mockDb)
	getMockDb()
	fmt.Println(mockDb)
	deleteAllRecords(client, ctx)
}