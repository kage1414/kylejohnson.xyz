import { Request, Response } from 'express';
import { getAllExperiences, updateExperience } from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllExperiences(client).then((value) => {
    res.send(value);
  });
};

const put = (req: Request, res: Response) => {
  const { id, employer, position, time, active } = req.body;
  if (!id) {
    res.sendStatus(400);
  }
  updateExperience(client, {
    id,
    employer,
    position,
    time,
    active,
  }).then((value) => {
    res.send(value);
  });
};

export default { get, put };