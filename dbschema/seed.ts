import { client } from '../src/components/edgedb';
import mock from '../src/components/mock-db';
import e from './edgeql-js';
import { addTechnology } from './queries';

const deleteAllRecords = async () => {
  console.log('Dropping tables');
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
  console.log('Tables dropped');
  return;
};

const seedExperience = async () => {
  console.log('Experience starting...');
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
  console.log('Experience complete');
  return;
};

const seedApplication = async () => {
  console.log('Application starting...');
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
  console.log('Application complete');
  return;
};

const seedTechStacks = async () => {
  console.log('TechStacks starting...');
  await mock.technical_skills.forEach(async (app) => {
    const createTechStack = e
      .insert(e.TechStack, {
        stack: app.stack,
      })
      .unlessConflict();
    await createTechStack.run(client);
  });
  console.log('TechStacks complete');
  return;
};

const seedTechnology = async () => {
  console.log('Technology starting...');
  await mock.technical_skills.forEach(async (app) => {
    await app.technologies.forEach(async (tech) => {
      await addTechnology(client, { name: tech, stack: app.stack });
    });
  });
  console.log('Technology complete');
  return;
};

const seedEducation = async () => {
  console.log('Education starting...');
  await mock.education.forEach(async (edu) => {
    const createEducation = e.insert(e.Education, {
      school: edu.school,
      time: edu.time,
      certificate: edu.certificate,
      degree: edu.degree,
    });
    await createEducation.run(client);
  });
  console.log('Education complete');
  return;
};

export const seed = async (): Promise<void> => {
  await deleteAllRecords();
  await seedTechStacks();
  setTimeout(async () => {
    await seedTechnology();
    await seedExperience();
    await seedEducation();
    await seedApplication();
  }, 2500);
};
