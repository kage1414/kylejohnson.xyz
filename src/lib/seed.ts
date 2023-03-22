import {
  Application,
  Description,
  Education,
  Experience,
  TechStack,
  Technology,
} from 'dbTypes';
import e from 'dbschema/edgeql-js';
import { addTechnology } from 'dbschema/queries';

import { client } from './edgedb';
import { getMostRecentSnapshot } from './take-snapshot';

type DescriptionArray = Omit<Description, 'id'>[];
type TechnologyArray = Omit<Technology, 'id'>[];

type TechStackArray = ({ technologies: TechnologyArray } & Omit<
  TechStack,
  'id'
>)[];
type ExperienceArray = ({
  descriptions: DescriptionArray;
} & Omit<Experience, 'id'>)[];
type EducationArray = Omit<Education, 'id'>[];
type ApplicationArray = ({
  descriptions: DescriptionArray;
  technologies: TechnologyArray;
} & Omit<Application, 'id'>)[];

interface Snapshot {
  technical_skills: TechStackArray;
  experience: ExperienceArray;
  education: EducationArray;
  applications: ApplicationArray;
}

const snap: Snapshot = getMostRecentSnapshot();

const deleteAllRecords = async () => {
  // eslint-disable-next-line
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
  // eslint-disable-next-line
  console.info('Tables dropped');
  return;
};

const seedExperience = async () => {
  // eslint-disable-next-line
  console.info('Experience starting...');
  await snap.experience.forEach(async (exp) => {
    const createExperience = e.insert(e.Experience, {
      employer: exp.employer,
      position: exp.position,
      time: exp.time,
      active: exp.active,
      priority: exp.priority,
    });
    const experienceResult = await createExperience.run(client);
    await exp.descriptions.forEach(async (desc) => {
      const createDescription = e.insert(e.Description, {
        description: desc.description,
        priority: desc.priority,
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
  // eslint-disable-next-line
  console.info('Experience complete');
  return;
};

const seedApplication = async () => {
  // eslint-disable-next-line
  console.info('Application starting...');
  await snap.applications.forEach(async (app) => {
    const createApplication = e.insert(e.Application, {
      name: app.name,
      url: app.url,
      active: app.active,
      priority: app.priority,
    });
    const applicationResult = await createApplication.run(client);
    await app.descriptions.forEach(async (desc) => {
      const createDescription = e.insert(e.Description, {
        description: desc.description,
        priority: desc.priority,
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
          name: technology.name,
          url: technology.url,
          priority: technology.priority,
        })
        .unlessConflict((tech) => {
          return {
            on: tech.name,
            else: e.select(tech, () => ({
              // @ts-expect-error
              filter: e.op(tech.name, '=', technology.name),
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
  // eslint-disable-next-line
  console.info('Application complete');
  return;
};

const seedTechStacks = async () => {
  // eslint-disable-next-line
  console.info('TechStacks starting...');
  await snap.technical_skills.forEach(async (skill) => {
    const createTechStack = e
      .insert(e.TechStack, {
        stack: skill.stack,
      })
      .unlessConflict();
    await createTechStack.run(client);
  });
  // eslint-disable-next-line
  console.info('TechStacks complete');
  return;
};

const seedTechnology = async () => {
  // eslint-disable-next-line
  console.info('Technology starting...');
  await snap.technical_skills.forEach(async (stack) => {
    await stack.technologies.forEach(async (tech) => {
      await addTechnology(client, {
        name: tech.name,
        stack: stack.stack,
        url: tech?.url,
        priority: tech.priority,
      });
    });
  });
  // eslint-disable-next-line
  console.info('Technology complete');
  return;
};

const seedEducation = async () => {
  // eslint-disable-next-line
  console.info('Education starting...');
  await snap.education.forEach(async (edu) => {
    const createEducation = e.insert(e.Education, {
      school: edu.school,
      time: edu.time,
      certificate: edu.certificate,
      degree: edu.degree,
      active: edu.active,
      priority: edu.priority,
    });
    await createEducation.run(client);
  });
  // eslint-disable-next-line
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
    // eslint-disable-next-line
    console.log('done');
    return;
  }, 2500);
  return;
};
