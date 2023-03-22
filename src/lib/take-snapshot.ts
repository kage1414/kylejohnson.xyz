import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { Application, Education, Experience, TechStack } from 'dbTypes';
import { snapshotTechnologies } from 'queries';

import { client } from './edgedb';
import manifestTemplate from './snapshots/manifest-template.json';

const tmpDir = path.resolve('tmp');
const manifestFilePath = path.join(tmpDir, 'manifest.json');

interface Snapshot {
  technical_skills?: TechStack[];
  applications?: Application[];
  experience?: Experience[];
  education?: Education[];
}

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
  const snapshot: Snapshot = {};
  const technologies: TechStack[] = await snapshotTechnologies(client);
  snapshot.technical_skills = technologies;

  const jsonFilePath = getJsonFilePath();

  const manifest = getManifest();
  writeFileSync(jsonFilePath, JSON.stringify(snapshot, null, '\t'));
  manifest['most-recent'] = jsonFilePath;
  manifest.files.push(jsonFilePath);
  writeFileSync(manifestFilePath, JSON.stringify(manifest, null, '\t'));
};

export const getMostRecentSnapshot = async () => {};
