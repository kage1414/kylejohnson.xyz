import mock from './mock-db';
import { Experience, Description } from './db/sequelize';
import { Request, Response } from 'express';

const get = async (req: Request, res: Response) => {
  const experiences = await Experience.findAll({ include: Description });
  res.send(experiences);
};

export default { get };
