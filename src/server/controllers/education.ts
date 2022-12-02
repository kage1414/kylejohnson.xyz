import { Request, Response } from 'express';
import { getAllEducations } from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllEducations(client).then((value) => {
    res.send(value);
  });
};

export default { get };
