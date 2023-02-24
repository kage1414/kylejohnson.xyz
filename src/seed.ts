import e from 'dbschema/edgeql-js';
import { addTechnology } from 'dbschema/queries';

import { client } from './edgedb';
import mock from './mock-db';

const deleteAllRecords = async () => {
  console.info('Dropping tables');
  const queryApplication = e.delete(e.Application);
  await queryApplication.run(client);
  const queryTechnology = e.delete(e.Technology);
  await queryTechnology.run(client);
  const queryTechStack = e.delete(e.TechStack);
  await queryTechStack.run(client);
  const queryExperience = e.delete(e.Experience);
  await queryExperience.run(client);
  const queryDescription = e.delete(e.Description);
  await queryDescription.run(client);
  const queryEducation = e.delete(e.Education);
  await queryEducation.run(client);
  console.info('Tables dropped');
  return;
};

const seedExperience = async () => {
  console.info('Experience starting...');
  await mock.experience.forEach(async (exp) => {
    const createExperience = e.insert(e.Experience, {
      employer: exp.employer,
      position: exp.position,
      time: exp.time,
    });
    const experienceResult = await createExperience.run(client);
    await exp.descriptions.forEach(async (desc) => {
      const createDescription = e.insert(e.Description, {
        description: desc.description,
      });
      const updateExperience = e.update(e.Experience, () => ({
        filter_single: { id: experienceResult.id },
        set: {
          descriptions: { '+=': createDescription },
        },
      }));
      await updateExperience.run(client);
    });
  });
  console.info('Experience complete');
  return;
};

const seedApplication = async () => {
  console.info('Application starting...');
  await mock.applications.forEach(async (app) => {
    const createApplication = e.insert(e.Application, {
      name: app.name,
    });
    const applicationResult = await createApplication.run(client);
    await app.descriptions.forEach(async (desc) => {
      const createDescription = e.insert(e.Description, {
        description: desc.description,
      });
      const updateApplication = e.update(e.Application, () => ({
        filter_single: { id: applicationResult.id },
        set: {
          descriptions: { '+=': createDescription },
        },
      }));
      await updateApplication.run(client);
    });
    await app.technologies.forEach(async (technology) => {
      const createTechnology = e
        .insert(e.Technology, {
          name: technology,
        })
        .unlessConflict((tech) => {
          return {
            on: tech.name,
            else: e.select(tech, () => ({
              filter: e.op(tech.name, '=', technology),
            })),
          };
        });
      const updateApplication = e.update(e.Application, () => ({
        filter_single: { id: applicationResult.id },
        set: {
          technologies: { '+=': createTechnology },
        },
      }));
      await updateApplication.run(client);
    });
  });
  console.info('Application complete');
  return;
};

const seedTechStacks = async () => {
  console.info('TechStacks starting...');
  await mock.technical_skills.forEach(async (app) => {
    const createTechStack = e
      .insert(e.TechStack, {
        stack: app.stack,
      })
      .unlessConflict();
    await createTechStack.run(client);
  });
  console.info('TechStacks complete');
  return;
};

const seedTechnology = async () => {
  console.info('Technology starting...');
  await mock.technical_skills.forEach(async (app) => {
    await app.technologies.forEach(async (tech) => {
      await addTechnology(client, { name: tech, stack: app.stack });
    });
  });
  console.info('Technology complete');
  return;
};

const seedEducation = async () => {
  console.info('Education starting...');
  await mock.education.forEach(async (edu) => {
    const createEducation = e.insert(e.Education, {
      school: edu.school,
      time: edu.time,
      certificate: edu.certificate,
      degree: edu.degree,
    });
    await createEducation.run(client);
  });
  console.info('Education complete');
  return;
};

export const seed = async (): Promise<void> => {
  await deleteAllRecords();
  await seedTechStacks();
  await setTimeout(async () => {
    await seedTechnology();
    await seedExperience();
    await seedEducation();
    await seedApplication();
    return;
  }, 2500);
  return;
};
