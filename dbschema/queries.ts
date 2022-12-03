import type {Client} from "edgedb";

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

export async function getDescription(client: Client, args: {
  "id": string;
}): Promise<{
  "id": string;
  "description": string;
} | null> {
  return client.querySingle(`select Description {id, description}
filter .id = <uuid>$id;`, args);
}

export async function getAllExperiences(client: Client): Promise<{
  "id": string;
  "employer": string;
  "position": string;
  "time": string;
  "active": boolean | null;
  "descriptions": {
    "description": string;
    "id": string;
  }[];
}[]> {
  return client.query(`select Experience {id, employer, position, time, active, descriptions: {description, id}};`);
}

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
    "id": string;
  }[];
  "technologies": {
    "name": string;
    "url": string | null;
    "id": string;
  }[];
}[]> {
  return client.query(`select Application {name, url, active, descriptions: {description, id}, technologies: {name, url, id}};`);
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

export async function getAllEducations(client: Client): Promise<{
  "school": string;
  "time": string;
  "certificate": string | null;
  "degree": string | null;
  "active": boolean | null;
}[]> {
  return client.query(`select Education {school, time, certificate, degree, active};`);
}

export async function updateExperienceDescription(client: Client, args: {
  "id": string;
  "description": string;
}): Promise<{
  "description": string;
  "id": string;
} | null> {
  return client.querySingle(`update Description
filter .id = <uuid>$id
set {
  description := <str>$description,
};
select Description {description, id}
filter .id = <uuid>$id;`, args);
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