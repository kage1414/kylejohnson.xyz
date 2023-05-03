// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// ApplicationsColumns holds the columns for the "applications" table.
	ApplicationsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "name", Type: field.TypeString, Nullable: true},
		{Name: "url", Type: field.TypeString, Nullable: true},
		{Name: "active", Type: field.TypeBool, Nullable: true, Default: true},
		{Name: "priority", Type: field.TypeInt32, Nullable: true},
	}
	// ApplicationsTable holds the schema information for the "applications" table.
	ApplicationsTable = &schema.Table{
		Name:       "applications",
		Columns:    ApplicationsColumns,
		PrimaryKey: []*schema.Column{ApplicationsColumns[0]},
	}
	// DescriptionsColumns holds the columns for the "descriptions" table.
	DescriptionsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "description", Type: field.TypeString},
		{Name: "active", Type: field.TypeBool, Nullable: true, Default: true},
		{Name: "priority", Type: field.TypeInt32, Nullable: true},
		{Name: "application_descriptions", Type: field.TypeUUID, Nullable: true},
		{Name: "experience_descriptions", Type: field.TypeUUID, Nullable: true},
	}
	// DescriptionsTable holds the schema information for the "descriptions" table.
	DescriptionsTable = &schema.Table{
		Name:       "descriptions",
		Columns:    DescriptionsColumns,
		PrimaryKey: []*schema.Column{DescriptionsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "descriptions_applications_descriptions",
				Columns:    []*schema.Column{DescriptionsColumns[4]},
				RefColumns: []*schema.Column{ApplicationsColumns[0]},
				OnDelete:   schema.SetNull,
			},
			{
				Symbol:     "descriptions_experiences_descriptions",
				Columns:    []*schema.Column{DescriptionsColumns[5]},
				RefColumns: []*schema.Column{ExperiencesColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// EducationsColumns holds the columns for the "educations" table.
	EducationsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "school", Type: field.TypeString},
		{Name: "time", Type: field.TypeString, Nullable: true},
		{Name: "certificate", Type: field.TypeString, Nullable: true},
		{Name: "degree", Type: field.TypeString, Nullable: true},
		{Name: "active", Type: field.TypeBool, Nullable: true, Default: true},
		{Name: "priority", Type: field.TypeInt32, Nullable: true},
	}
	// EducationsTable holds the schema information for the "educations" table.
	EducationsTable = &schema.Table{
		Name:       "educations",
		Columns:    EducationsColumns,
		PrimaryKey: []*schema.Column{EducationsColumns[0]},
	}
	// ExperiencesColumns holds the columns for the "experiences" table.
	ExperiencesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "employer", Type: field.TypeString},
		{Name: "position", Type: field.TypeString},
		{Name: "time", Type: field.TypeString, Nullable: true},
		{Name: "active", Type: field.TypeBool, Nullable: true, Default: true},
		{Name: "priority", Type: field.TypeInt32, Nullable: true},
	}
	// ExperiencesTable holds the schema information for the "experiences" table.
	ExperiencesTable = &schema.Table{
		Name:       "experiences",
		Columns:    ExperiencesColumns,
		PrimaryKey: []*schema.Column{ExperiencesColumns[0]},
	}
	// InvitesColumns holds the columns for the "invites" table.
	InvitesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "email", Type: field.TypeString, Unique: true},
		{Name: "key", Type: field.TypeString},
		{Name: "registered", Type: field.TypeBool, Nullable: true, Default: false},
		{Name: "user_invite", Type: field.TypeUUID, Nullable: true},
	}
	// InvitesTable holds the schema information for the "invites" table.
	InvitesTable = &schema.Table{
		Name:       "invites",
		Columns:    InvitesColumns,
		PrimaryKey: []*schema.Column{InvitesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "invites_users_invite",
				Columns:    []*schema.Column{InvitesColumns[4]},
				RefColumns: []*schema.Column{UsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// TechStacksColumns holds the columns for the "tech_stacks" table.
	TechStacksColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "stack", Type: field.TypeString, Unique: true},
	}
	// TechStacksTable holds the schema information for the "tech_stacks" table.
	TechStacksTable = &schema.Table{
		Name:       "tech_stacks",
		Columns:    TechStacksColumns,
		PrimaryKey: []*schema.Column{TechStacksColumns[0]},
	}
	// TechnologiesColumns holds the columns for the "technologies" table.
	TechnologiesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "name", Type: field.TypeString, Unique: true},
		{Name: "url", Type: field.TypeString, Nullable: true},
		{Name: "priority", Type: field.TypeInt32, Nullable: true},
		{Name: "tech_stack_technology", Type: field.TypeUUID, Nullable: true},
	}
	// TechnologiesTable holds the schema information for the "technologies" table.
	TechnologiesTable = &schema.Table{
		Name:       "technologies",
		Columns:    TechnologiesColumns,
		PrimaryKey: []*schema.Column{TechnologiesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "technologies_tech_stacks_technology",
				Columns:    []*schema.Column{TechnologiesColumns[4]},
				RefColumns: []*schema.Column{TechStacksColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// UsersColumns holds the columns for the "users" table.
	UsersColumns = []*schema.Column{
		{Name: "id", Type: field.TypeUUID},
		{Name: "username", Type: field.TypeString, Unique: true},
		{Name: "password_hash", Type: field.TypeString},
		{Name: "email", Type: field.TypeString, Unique: true},
		{Name: "name", Type: field.TypeString, Nullable: true},
	}
	// UsersTable holds the schema information for the "users" table.
	UsersTable = &schema.Table{
		Name:       "users",
		Columns:    UsersColumns,
		PrimaryKey: []*schema.Column{UsersColumns[0]},
	}
	// ApplicationTechnologiesColumns holds the columns for the "application_technologies" table.
	ApplicationTechnologiesColumns = []*schema.Column{
		{Name: "application_id", Type: field.TypeUUID},
		{Name: "technology_id", Type: field.TypeUUID},
	}
	// ApplicationTechnologiesTable holds the schema information for the "application_technologies" table.
	ApplicationTechnologiesTable = &schema.Table{
		Name:       "application_technologies",
		Columns:    ApplicationTechnologiesColumns,
		PrimaryKey: []*schema.Column{ApplicationTechnologiesColumns[0], ApplicationTechnologiesColumns[1]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "application_technologies_application_id",
				Columns:    []*schema.Column{ApplicationTechnologiesColumns[0]},
				RefColumns: []*schema.Column{ApplicationsColumns[0]},
				OnDelete:   schema.Cascade,
			},
			{
				Symbol:     "application_technologies_technology_id",
				Columns:    []*schema.Column{ApplicationTechnologiesColumns[1]},
				RefColumns: []*schema.Column{TechnologiesColumns[0]},
				OnDelete:   schema.Cascade,
			},
		},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		ApplicationsTable,
		DescriptionsTable,
		EducationsTable,
		ExperiencesTable,
		InvitesTable,
		TechStacksTable,
		TechnologiesTable,
		UsersTable,
		ApplicationTechnologiesTable,
	}
)

func init() {
	DescriptionsTable.ForeignKeys[0].RefTable = ApplicationsTable
	DescriptionsTable.ForeignKeys[1].RefTable = ExperiencesTable
	InvitesTable.ForeignKeys[0].RefTable = UsersTable
	TechnologiesTable.ForeignKeys[0].RefTable = TechStacksTable
	ApplicationTechnologiesTable.ForeignKeys[0].RefTable = ApplicationsTable
	ApplicationTechnologiesTable.ForeignKeys[1].RefTable = TechnologiesTable
}
