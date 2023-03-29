import {
  createSnapshot,
  getMostRecentSnapshot,
  snapshotApplications,
  snapshotEducation,
  snapshotExperience,
  snapshotTechnologies,
} from 'queries';

import { client } from './edgedb';
import mockDb from './mock-db';
import { Snapshot } from './seed';

export const takeSnapshot = async () => {
  const snapshot: any = {};
  snapshot.technical_skills = await snapshotTechnologies(client);
  snapshot.applications = await snapshotApplications(client);
  snapshot.experience = await snapshotExperience(client);
  snapshot.education = await snapshotEducation(client);

  const snapshotJson = JSON.stringify(snapshot);
  await createSnapshot(client, { data: snapshotJson });
};

export const getMostRecentDatabaseSnapshot = async (): Promise<Snapshot> => {
  const mostRecent = await getMostRecentSnapshot(client);
  if (mostRecent && typeof mostRecent.data === 'string') {
    return JSON.parse(mostRecent.data);
  } else {
    return mockDb;
  }
};
