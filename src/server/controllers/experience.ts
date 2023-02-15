import { Request, Response } from 'express';
import { getAllExperiences, updateExperience } from 'dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllExperiences(client)
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const put = (req: Request, res: Response) => {
  const { id, employer, position, time, active, priority } = req.body;
  if (!id) {
    res.sendStatus(400);
  }
  updateExperience(client, {
    id,
    employer,
    position,
    time,
    active,
    priority,
  })
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

export default { get, put };
