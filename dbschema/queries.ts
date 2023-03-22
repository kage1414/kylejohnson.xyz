// GENERATED by @edgedb/generate v0.0.7
// Run 'npx @edgedb/generate queries --file' to re-generate

import type {Executor} from "edgedb";

export async function addApplicationTechnology(client: Executor, args: {
  "id": string;
  "name"?: string | null;
}): Promise<{
  "id": string;
  "name": string | null;
  "url": string | null;
  "stack": {
    "id": string;
  } | null;
  "priority": number | null;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  technologies += ( 
    select (
      insert Technology {
        name := <optional str>$name,
      } unless conflict on .name else Technology
    )
  )
};
select Technology
{id, name, url, stack, priority }
filter .name = <str>$name`, args);
}

export async function deleteDescription(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete Description
filter Description.id = <uuid>$id;`, args);
}

export async function deleteApplication(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete Application
filter .id = <uuid>$id;`, args);
}

export async function removeApplicationTechnology(client: Executor, args: {
  "id": string;
  "technology_id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  technologies -= ( 
    select Technology
    filter .id = <uuid>$technology_id
  )
}`, args);
}

export async function deleteEducation(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete Education
filter .id = <uuid>$id;`, args);
}

export async function addDescription(client: Executor, args: {
  "description"?: string | null;
}): Promise<{
  "description": string | null;
  "id": string;
}> {
  return client.queryRequiredSingle(`select (
  insert Description {
    description := <optional str>$description
  }
) {
  description,
  id
}`, args);
}

export async function getAllEducations(client: Executor): Promise<{
  "id": string;
  "school": string | null;
  "time": string | null;
  "certificate": string | null;
  "degree": string | null;
  "active": boolean | null;
  "priority": number | null;
}[]> {
  return client.query(`select Education {
  id,
  school, 
  time, 
  certificate, 
  degree, 
  active,
  priority
}
order by .priority asc;`);
}

export async function updateDescription(client: Executor, args: {
  "id": string;
  "description"?: string | null;
  "priority"?: number | null;
}): Promise<{
  "id": string;
  "description": string | null;
} | null> {
  return client.querySingle(`update Description
filter .id = <uuid>$id
set {
  description := <optional str>$description,
  priority := <optional int32>$priority
};
select Description {id, description}
filter .id = <uuid>$id;`, args);
}

export async function addExperience(client: Executor, args: {
  "employer"?: string | null;
  "time"?: string | null;
  "position"?: string | null;
  "active"?: boolean | null;
  "priority"?: number | null;
}): Promise<{
  "id": string;
}> {
  return client.queryRequiredSingle(`insert Experience
{
  employer := <optional str>$employer,
  time := <optional str>$time,
  position := <optional str>$position,
  active := <optional bool>$active,
  priority := <optional int32>$priority
};`, args);
}

export async function addApplicationDescription(client: Executor, args: {
  "application_id": string;
  "description_id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$application_id
set {
  descriptions += (
    select Description
    filter .id = <uuid>$description_id
    limit 1
  )
};`, args);
}

export async function updateApplication(client: Executor, args: {
  "id": string;
  "name"?: string | null;
  "url"?: string | null;
  "priority"?: number | null;
  "active"?: boolean | null;
}): Promise<{
  "id": string;
  "name": string | null;
  "url": string | null;
  "active": boolean | null;
  "descriptions": {
    "description": string | null;
    "id": string;
  }[];
  "technologies": {
    "name": string | null;
    "url": string | null;
    "id": string;
  }[];
  "priority": number | null;
} | null> {
  return client.querySingle(`update Application
filter .id = <uuid>$id
set {
  name := <optional str>$name,
  url := <optional str>$url,
  priority := <optional int32>$priority,
  active := <optional bool>$active
};
select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id}, 
  technologies: {name, url, id},
  priority
}
filter .id = <uuid>$id;`, args);
}

export async function getAllApplications(client: Executor): Promise<{
  "id": string;
  "name": string | null;
  "url": string | null;
  "active": boolean | null;
  "descriptions": {
    "description": string | null;
    "id": string;
  }[];
  "technologies": {
    "name": string | null;
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

export async function getAllExperiences(client: Executor): Promise<{
  "id": string;
  "employer": string | null;
  "position": string | null;
  "time": string | null;
  "active": boolean | null;
  "descriptions": {
    "description": string | null;
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

export async function addApplication(client: Executor, args: {
  "name"?: string | null;
  "url"?: string | null;
  "priority"?: number | null;
  "active"?: boolean | null;
}): Promise<{
  "id": string;
}> {
  return client.queryRequiredSingle(`insert Application {
  name := <optional str>$name,
  url := <optional str>$url,
  priority := <optional int32>$priority,
  active := <optional bool>$active
};`, args);
}

export async function addExperienceDescription(client: Executor, args: {
  "experience_id": string;
  "description_id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update  Experience
filter .id = <uuid>$experience_id
set {
  descriptions += (
    select Description
    filter .id = <uuid>$description_id
    limit 1
  )
};`, args);
}

export async function snapshotApplications(client: Executor): Promise<{
  "name": string | null;
  "url": string | null;
  "active": boolean | null;
  "priority": number | null;
  "technologies": {
    "name": string | null;
    "url": string | null;
    "priority": number | null;
  }[];
  "descriptions": {
    "description": string | null;
    "priority": number | null;
  }[];
}[]> {
  return client.query(`select Application {
  name,
  url,
  active,
  priority,
  technologies: {
    name,
    url,
    priority
  },
  descriptions: {
    description,
    priority
  },
};`);
}

export async function updateEducation(client: Executor, args: {
  "id": string;
  "school": string;
  "time": string;
  "certificate"?: string | null;
  "degree"?: string | null;
  "active"?: boolean | null;
  "priority"?: number | null;
}): Promise<{
  "id": string;
  "school": string | null;
  "time": string | null;
  "certificate": string | null;
  "degree": string | null;
  "active": boolean | null;
  "priority": number | null;
} | null> {
  return client.querySingle(`update Education
filter .id = <uuid>$id
set {
  school := <str>$school,
  time := <str>$time,
  certificate := <optional str>$certificate,
  degree := <optional str>$degree,
  active := <optional bool>$active,
  priority := <optional int32>$priority
};
select Education {
  id,
  school, 
  time, 
  certificate, 
  degree, 
  active,
  priority
}
filter .id = <uuid>$id;`, args);
}

export async function deleteExperience(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete Experience
filter Experience.id = <uuid>$id;`, args);
}

export async function deleteTechnology(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete Technology
filter .id = <uuid>$id;`, args);
}

export async function snapshotEducation(client: Executor): Promise<{
  "school": string | null;
  "time": string | null;
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
}`);
}

export async function updateExperience(client: Executor, args: {
  "id": string;
  "employer"?: string | null;
  "time"?: string | null;
  "position"?: string | null;
  "active"?: boolean | null;
  "priority"?: number | null;
}): Promise<{
  "id": string;
  "employer": string | null;
  "time": string | null;
  "position": string | null;
  "active": boolean | null;
  "descriptions": {
    "description": string | null;
    "id": string;
  }[];
  "priority": number | null;
} | null> {
  return client.querySingle(`update Experience
filter .id = <uuid>$id
set {
  employer := <optional str>$employer,
  time := <optional str>$time,
  position := <optional str>$position,
  active := <optional bool>$active,
  priority := <optional int32>$priority
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

export async function getDescription(client: Executor, args: {
  "id": string;
}): Promise<{
  "id": string;
  "description": string | null;
} | null> {
  return client.querySingle(`select Description {id, description}
filter .id = <uuid>$id;`, args);
}

export async function updateTechnology(client: Executor, args: {
  "id": string;
  "name"?: string | null;
  "priority"?: number | null;
  "stack"?: string | null;
}): Promise<{
  "id": string;
  "name": string | null;
  "stack": {
    "id": string;
    "stack": string;
  } | null;
  "priority": number | null;
} | null> {
  return client.querySingle(`update Technology
filter .id = <uuid>$id
set {
  name := <optional str>$name,
  priority := <optional int32>$priority,
  stack := (
    select TechStack
    filter .stack = <optional str>$stack
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

export async function getTechStacks(client: Executor): Promise<{
  "id": string;
  "stack": string;
}[]> {
  return client.query(`select TechStack {id, stack};`);
}

export async function snapshotTechnologies(client: Executor): Promise<{
  "id": string;
  "stack": string;
  "technologies": {
    "name": string | null;
    "url": string | null;
    "priority": number | null;
  }[];
}[]> {
  return client.query(`select TechStack {
  id,
  stack,
  technologies := .<stack[is Technology] {
    name,
    url,
    priority
  }
};`);
}

export async function getAllTechnicalSkills(client: Executor): Promise<{
  "stack": string;
  "technologies": {
    "name": string | null;
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

export async function snapshotExperience(client: Executor): Promise<{
  "employer": string | null;
  "position": string | null;
  "active": boolean | null;
  "time": string | null;
  "priority": number | null;
  "descriptions": {
    "description": string | null;
    "priority": number | null;
  }[];
}[]> {
  return client.query(`select Experience {
  employer,
  position,
  active,
  time,
  priority,
  descriptions: {
    description,
    priority
  },
};`);
}

export async function addUser(client: Executor, args: {
  "username": string;
  "hash": string;
  "salt": string;
  "name"?: string | null;
  "email": string;
}): Promise<{
  "id": string;
}> {
  return client.queryRequiredSingle(`insert User
{
  username := <str>$username,
  hash := <str>$hash,
  salt := <str>$salt,
  name := <optional str>$name,
  email := <str>$email
};`, args);
}

export async function createInvite(client: Executor, args: {
  "email": string;
}): Promise<{
  "id": string;
}> {
  return client.queryRequiredSingle(`insert Invite {
  email := <str>$email
}`, args);
}

export async function getAllUsers(client: Executor): Promise<{
  "username": string;
}[]> {
  return client.query(`select User {
  username
}`);
}

export async function deleteUser(client: Executor, args: {
  "username": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`delete User
filter .username = <str>$username;`, args);
}

export async function getInvite(client: Executor, args: {
  "email": string;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`select Invite
filter .email = <str>$email
limit 1`, args);
}

export async function getAllTechnologies(client: Executor): Promise<{
  "id": string;
  "name": string | null;
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

export async function addEducation(client: Executor, args: {
  "school"?: string | null;
  "time"?: string | null;
  "certificate"?: string | null;
  "degree"?: string | null;
  "active"?: boolean | null;
  "priority"?: number | null;
}): Promise<{
  "id": string;
}> {
  return client.queryRequiredSingle(`insert Education
{
  school := <optional str>$school,
  time := <optional str>$time,
  certificate := <optional str>$certificate,
  degree := <optional str>$degree,
  active := <optional bool>$active,
  priority := <optional int32>$priority
};`, args);
}

export async function updateUser(client: Executor, args: {
  "username": string;
  "hash"?: string | null;
  "salt"?: string | null;
  "name"?: string | null;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`update User
filter .username = <str>$username
set {
  username := <optional str>$username,
  hash := <optional str>$hash,
  salt := <optional str>$salt,
  name := <optional str>$name
}`, args);
}

export async function getUserById(client: Executor, args: {
  "id": string;
}): Promise<{
  "username": string;
  "hash": string;
  "salt": string;
  "name": string | null;
} | null> {
  return client.querySingle(`select User
{
  username,
  hash,
  salt,
  name
}
filter .id = <uuid>$id
limit 1`, args);
}

export async function getUser(client: Executor, args: {
  "username": string;
}): Promise<{
  "username": string;
  "hash": string;
  "salt": string;
  "name": string | null;
} | null> {
  return client.querySingle(`select User
{
  username,
  hash,
  salt,
  name
}
filter .username = <str>$username
limit 1`, args);
}

export async function addTechnology(client: Executor, args: {
  "name"?: string | null;
  "url"?: string | null;
  "priority"?: number | null;
  "stack"?: string | null;
}): Promise<{
  "id": string;
} | null> {
  return client.querySingle(`insert Technology
{
  name := <optional str>$name,
  url := <optional str>$url,
  priority := <optional int32>$priority,
  stack := (
    select TechStack
    filter .stack = <optional str>$stack
    limit 1
  )
} unless conflict on .name;`, args);
}