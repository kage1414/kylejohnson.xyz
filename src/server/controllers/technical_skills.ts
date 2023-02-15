import { Request, Response } from 'express';
import { getAllTechnicalSkills } from 'dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllTechnicalSkills(client)
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

export default { get };
