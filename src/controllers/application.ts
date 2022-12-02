import { Request, Response } from 'express';
import { getAllApplications } from '../../dbschema/queries';
import { client } from '../server/edgedb';

const get = (req: Request, res: Response) => {
  getAllApplications(client).then((value) => {
    res.send(value);
  });
};

export default { get };
