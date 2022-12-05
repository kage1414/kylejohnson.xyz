import type {Client} from "edgedb";

export async function addTechnology(client: Client, args: {
  "name": string;
  "stack": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`insert Technology
{
  name := <str>$name,
  stack := (
    select TechStack
    filter .stack = <str>$stack
    limit 1
  )
} unless conflict on .name;`, args);
}

export async function getAllEducations(client: Client): Promise<{
  "school": string;
  "time": string;
  "certificate": string | null;
  "degree": string | null;
  "active": boolean | null;
  "priority": number | null;
}[]> {
  return client.query(`select Education {
  school, 
  time, 
  certificate, 
  degree, 
  active,
  priority
}
order by .priority asc;`);
}

export async function getAllTechnicalSkills(client: Client): Promise<{
  "stack": string;
  "technologies": {
    "name": string;
    "url": string | null;
    "priority": number | null;
  }[];
}[]> {
  return client.query(`select TechStack {
  stack,
  technologies := .<stack[is Technology] {
    name,
    url,
    priority
  },
}
order by .stack asc;`);
}

export async function getAllTechnologies(client: Client): Promise<{
  "id": string;
  "name": string;
  "stack": {
    "stack": string;
    "id": string;
  } | null;
  "priority": number | null;
}[]> {
  return client.query(`select Technology {
  id,
  name,
  stack: {stack, id},
  priority
}
order by .name asc;`);
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

export async function getTechStacks(client: Client): Promise<{
  "id": string;
  "stack": string;
}[]> {
  return client.query(`select TechStack {id, stack};`);
}

export async function updateApplication(client: Client, args: {
  "id": string;
  "name": string;
  "url": string;
  "priority": number;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  name := <str>$name,
  url := <str>$url,
  priority := <int32>$priority
};`, args);
}

export async function updateDescription(client: Client, args: {
  "id": string;
  "description": string;
  "priority": number;
}): Promise<{
  "id": string;
  "description": string;
} | null> {
  return client.querySingle(`update Description
filter .id = <uuid>$id
set {
  description := <str>$description,
  priority := <int32>$priority
};
select Description {id, description}
filter .id = <uuid>$id;`, args);
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

export async function getAllApplications(client: Client): Promise<{
  "id": string;
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
  "priority": number | null;
}[]> {
  return client.query(`select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id}, 
  technologies: {name, url, id},
  priority
}
order by .priority asc;`);
}

export async function updateExperience(client: Client, args: {
  "id": string;
  "employer": string;
  "time": string;
  "position": string;
  "active": boolean;
  "priority": number;
}): Promise<{
  "id": string;
  "employer": string;
  "time": string;
  "position": string;
  "active": boolean | null;
  "descriptions": {
    "description": string;
    "id": string;
  }[];
  "priority": number | null;
} | null> {
  return client.querySingle(`update Experience
filter .id = <uuid>$id
set {
  employer := <str>$employer,
  time := <str>$time,
  position := <str>$position,
  active := <bool>$active,
  priority := <int32>$priority
};
select Experience {id,
  employer,
  time,
  position,
  active,
  descriptions: {description, id},
  priority
}
filter .id = <uuid>$id;`, args);
}

export async function updateTechnology(client: Client, args: {
  "id": string;
  "name": string;
  "priority": number;
  "stack": string;
}): Promise<{
  "id": string;
  "name": string;
  "stack": {
    "id": string;
    "stack": string;
  } | null;
  "priority": number | null;
} | null> {
  return client.querySingle(`update Technology
filter .id = <uuid>$id
set {
  name := <str>$name,
  priority := <int32>$priority,
  stack := (
    select TechStack
    filter .stack = <str>$stack
    limit 1
  )
};
select Technology 
{
  id,
  name,
  stack: {id, stack},
  priority
}
filter .id = <uuid>$id;`, args);
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
  "priority": number | null;
}[]> {
  return client.query(`select Experience 
{
  id,
  employer, 
  position, 
  time, 
  active, 
  descriptions: {description, id},
  priority
}
order by .priority asc;`);
}