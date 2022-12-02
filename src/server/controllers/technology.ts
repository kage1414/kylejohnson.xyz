import { Request, Response } from 'express';
import { addApplicationTechnology } from '../../../dbschema/queries';
import { client } from '../edgedb';

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

export default { putApplication };
