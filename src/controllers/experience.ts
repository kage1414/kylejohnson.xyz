import { Request, Response } from 'express';
import { getAllExperiences } from '../../dbschema/queries';
import { client } from '../server/edgedb';

const get = (req: Request, res: Response) => {
  getAllExperiences(client).then((value) => {
    res.send(value);
  });
};

export default { get };
