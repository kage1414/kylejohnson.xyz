const edgedb = require('edgedb');

const client = edgedb.createClient();
import mock from './mock-db';
import e from '../../dbschema/edgeql-js';

const deleteAllRecords = async () => {
  const queryDescription = e.delete(e.Description);
  await queryDescription.run(client);
  const queryExperience = e.delete(e.Experience);
  await queryExperience.run(client);
  return;
};

const seedExperience = async () => {
  await mock.experience.forEach(async (exp) => {
    const createExperience = e.insert(e.Experience, {
      employer: exp.employer,
      position: exp.position,
      time: exp.time,
    });
    const experienceResult = await createExperience.run(client);
    exp.descriptions.forEach(async (desc) => {
      const createDescription = e.insert(e.Description, {
        description: desc.description,
      });
      await createDescription.run(client);
      e.update(e.Experience, () => ({
        filter_single: { id: experienceResult.id },
        set: {
          descriptions: { '+=': createDescription },
        },
      }));
    });
  });
  return;
};

const seed = async (): Promise<void> => {
  await deleteAllRecords();
  await seedExperience();
};

seed();
