import { client } from './edgedb';
import mock from './mock-db';
import e from '../../dbschema/edgeql-js';
import { addTechnology } from '../../dbschema/queries';

const deleteAllRecords = async () => {
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
      const updateExperience = e.update(e.Experience, () => ({
        filter_single: { id: experienceResult.id },
        set: {
          descriptions: { '+=': createDescription },
        },
      }));
      await updateExperience.run(client);
    });
  });
  return;
};

const seedApplication = async () => {
  await mock.applications.forEach(async (app) => {
    const createApplication = e.insert(e.Application, {
      name: app.name,
    });
    const applicationResult = await createApplication.run(client);
    app.descriptions.forEach(async (desc) => {
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
    app.technologies.forEach(async (tech) => {
      const createTechnology = e
        .insert(e.Technology, {
          name: tech,
        })
        .unlessConflict();
      const updateApplication = e.update(e.Application, () => ({
        filter_single: { id: applicationResult.id },
        set: {
          technologies: { '+=': createTechnology },
        },
      }));
      await updateApplication.run(client);
    });
  });
  return;
};

const seedTechStacks = async () => {
  await mock.technical_skills.forEach(async (app) => {
    const createTechStack = e
      .insert(e.TechStack, {
        stack: app.stack,
      })
      .unlessConflict();
    await createTechStack.run(client);
  });
  return;
};

const seedTechnology = async () => {
  await mock.technical_skills.forEach(async (app) => {
    app.technologies.forEach(async (tech) => {
      await addTechnology(client, { name: tech, stack: app.stack });
    });
  });
  return;
};

const seedEducation = async () => {
  await mock.education.forEach(async (edu) => {
    const createEducation = e.insert(e.Education, {
      school: edu.school,
      time: edu.time,
      certificate: edu.certificate,
      degree: edu.degree,
    });
    await createEducation.run(client);
  });
};

const seed = async (): Promise<void> => {
  await deleteAllRecords();
  await seedExperience();
  await seedApplication();
  await seedTechnology();
  await seedEducation();
  await seedTechStacks();
};

seed();
