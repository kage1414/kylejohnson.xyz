import { Request, Response } from 'express';
import {
  addApplicationTechnology,
  getAllTechnologies,
} from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllTechnologies(client).then((value) => {
    res.send(
      value.map((tech) => ({
        id: tech.id,
        name: tech?.name,
        stack: tech.stack?.stack,
      }))
    );
  });
};

const putApplication = (req: Request, res: Response) => {
  const { id, name, url } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  addApplicationTechnology(client, { id, name, url }).then((value) => {
    res.send(value);
  });
};

export default { putApplication, get };
