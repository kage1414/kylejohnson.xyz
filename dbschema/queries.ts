import type {Client} from "edgedb";

export async function addApplicationTechnology(client: Client, args: {
  "id": string;
  "name": string;
  "url": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  technologies += ( 
    insert Technology {
      name := <str>$name,
      url := <str>$url
    }
  )
}`, args);
}

export async function getAllApplications(client: Client): Promise<{
  "name": string;
  "url": string | null;
  "active": boolean | null;
  "descriptions": {
    "description": string;
  }[];
  "technologies": {
    "name": string;
    "url": string | null;
  }[];
}[]> {
  return client.query(`select Application {name, url, active, descriptions: {description}, technologies: {name, url}};`);
}

export async function addApplicationDescription(client: Client, args: {
  "id": string;
  "description": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  descriptions += ( 
    insert Description {
      description := <str>$description
    }
  )
}`, args);
}

export async function getAllEducations(client: Client): Promise<{
  "school": string;
  "time": string;
  "certificate": string | null;
  "degree": string | null;
  "active": boolean | null;
}[]> {
  return client.query(`select Education {school, time, certificate, degree, active};`);
}

export async function getAllExperiences(client: Client): Promise<{
  "employer": string;
  "position": string;
  "time": string;
  "active": boolean | null;
  "descriptions": {
    "description": string;
  }[];
}[]> {
  return client.query(`select Experience {employer, position, time, active, descriptions: {description}};`);
}

export async function updateApplication(client: Client, args: {
  "id": string;
  "name": string;
  "url": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  name := <str>$name,
  url := <str>$url
};`, args);
}

export async function getAllTechnicalSkills(client: Client): Promise<{
  "stack": string;
  "technologies": {
    "name": string;
    "url": string | null;
  }[];
}[]> {
  return client.query(`select TechStack {stack, technologies: {name, url}};`);
}