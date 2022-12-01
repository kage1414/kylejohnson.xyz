import type {Client} from "edgedb";

export async function getAllExperiences(client: Client): Promise<{
  "id": string;
}[]> {
  return client.query(`select Experience;`);
}