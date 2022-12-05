import { Request, Response } from 'express';
import {
  getAllApplications,
  updateApplication,
} from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllApplications(client).then((value) => {
    res.send(value);
  });
};

const put = (req: Request, res: Response) => {
  const { id, name, url, priority } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateApplication(client, { id, name, url, priority }).then((value) => {
    res.send(value);
  });
};
export default { get, put };
