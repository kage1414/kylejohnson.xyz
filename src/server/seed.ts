import { Applications } from '@/app/components/Pages';
import * as seq from './db/sequelize/sequelize';
const {
  sequelize,
  Description,
  Experience,
  Application,
  Technology,
  TechStack,
  Education,
  TechnologyApplication,
} = seq;

import mock from './mock-db';

const seed = async (): Promise<void> => {
  // await sequelize.drop({ cascade: true });
  await sequelize.sync({ force: true });
  mock.experience.forEach(async (exp) => {
    const experience = await Experience.create(exp);
    exp.descriptions.forEach(async (desc) => {
      await Description.create({
        ...desc,
        experienceId: experience.dataValues.id,
      });
    });
  });

  mock.applications.forEach(async (app) => {
    const application = await Application.create(app);
    const applicationId = application.getDataValue('id');
    app.technologies.forEach(async (tech) => {
      await Technology.findOrCreate({
        where: { name: tech },
      }).then(([technology]) => {
        technology;
      });
    });
  });
  // mock.education.forEach(async (ed) => {
  //   Education.create(ed);
  // });
  // mock.technical_skills.forEach(async (tech) => {
  //   await TechStack.create(tech, {
  //     include: [Technology],
  //   });
  // });
  return;
};

seed();
