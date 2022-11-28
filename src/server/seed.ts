import * as seq from './db/sequelize';

import mock from './mock-db';

type ExperienceAttr = {
  employer: string;
  position: string;
  time: string;
};

const seed = async (): Promise<void> => {
  await seq.sequelize.sync({ force: true });
  mock.experience.forEach(async (exp) => {
    const obj = await seq.Experience.create(exp);
    exp.description.forEach(async (desc) => {
      seq.Description.create({
        description: desc,
        experienceId: obj.dataValues.id,
      });
    });
  });

  mock.applications.forEach(async (app) => {
    const obj = await seq.Application.create(app);
    app.description.forEach(async (desc) => {
      seq.Description.create({
        description: desc,
        applicationId: obj.dataValues.id,
      });
    });
  });
  mock.education.forEach(async (ed) => {
    seq.Education.create(ed);
  });
  mock.technical_skills.forEach(async (tech) => {
    const obj = await seq.TechStack.create(tech);
    tech.technologies.forEach((technology) => {
      seq.Technology.create({
        name: technology,
        techStackId: obj.dataValues.id,
      });
    });
  });
  return;
};

seed();
