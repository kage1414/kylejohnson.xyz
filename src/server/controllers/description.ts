import { Request, Response } from 'express';
import { addApplicationDescription } from '../../../dbschema/queries';
import { client } from '../edgedb';

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

export default { putApplication };
