import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import {
  snapshotApplications,
  snapshotEducation,
  snapshotExperience,
  snapshotTechnologies,
} from 'queries';

import { client } from './edgedb';
import mockDb from './mock-db.json';
import manifestTemplate from './snapshots/manifest-template.json';

const tmpDir = path.resolve('tmp');
const manifestFilePath = path.join(tmpDir, 'manifest.json');

const getJsonFilePath = () => {
  return path.join(tmpDir, `snapshot-${Date.now()}.json`);
};

const getManifest = () => {
  let manifest;
  if (!existsSync(manifestFilePath)) {
    writeFileSync(manifestFilePath, JSON.stringify(manifestTemplate));
    manifest = JSON.parse(readFileSync(manifestFilePath).toString());
    manifest.files.pop();
  } else {
    manifest = JSON.parse(readFileSync(manifestFilePath).toString());
  }
  return manifest;
};

export const takeSnapshot = async () => {
  const snapshot: any = {};
  snapshot.technical_skills = await snapshotTechnologies(client);
  snapshot.applications = await snapshotApplications(client);
  snapshot.experience = await snapshotExperience(client);
  snapshot.education = await snapshotEducation(client);

  const jsonFilePath = getJsonFilePath();

  const manifest = getManifest();
  writeFileSync(jsonFilePath, JSON.stringify(snapshot, null, '\t'));
  manifest['most-recent'] = jsonFilePath;
  manifest.files.push(jsonFilePath);
  writeFileSync(manifestFilePath, JSON.stringify(manifest, null, '\t'));
};

export const getMostRecentSnapshot = () => {
  if (existsSync(manifestFilePath)) {
    const manifest = JSON.parse(readFileSync(manifestFilePath).toString());
    return JSON.parse(readFileSync(manifest['most-recent']).toString());
  } else {
    return mockDb;
  }
};
