import { Request, Response } from 'express';
import { getTechStacks } from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getTechStacks(client).then((value) => {
    res.send(value);
  });
};

export default { get };
