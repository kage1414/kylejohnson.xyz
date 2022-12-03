import { Request, Response } from 'express';
import {
  addApplicationDescription,
  updateExperienceDescription,
  getDescription,
} from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  const { id } = req.query;
  console.log(id);
  if (!id) {
    res.sendStatus(400);
    return;
  }
  getDescription(client, { id: id.toString() }).then((value) => {
    res.send(value);
  });
};

const putApplication = (req: Request, res: Response) => {
  const { id, description } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  addApplicationDescription(client, { id, description }).then((value) => {
    res.send(value);
  });
};

const putExperience = (req: Request, res: Response) => {
  const { id, description } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateExperienceDescription(client, { id, description }).then((value) => {
    setTimeout(() => {
      res.send(value);
    }, 1000);
  });
};

export default { putApplication, putExperience, get };
