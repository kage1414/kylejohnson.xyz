import type {Client} from "edgedb";

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

export async function getAllTechnicalSkills(client: Client): Promise<{
  "stack": string;
  "technologies": {
    "name": string;
    "url": string | null;
  }[];
}[]> {
  return client.query(`select TechStack {stack, technologies: {name, url}};`);
}