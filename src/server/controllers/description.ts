import { Request, Response } from 'express';
import {
  addApplicationDescription,
  getDescription,
  updateDescription,
} from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  getDescription(client, { id: id.toString() })
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const put = (req: Request, res: Response) => {
  const { id, description, priority } = req.body;
  if (!id || !description) {
    res.sendStatus(400);
    return;
  }
  updateDescription(client, {
    id: id.toString(),
    description: description.toString(),
    priority,
  })
    .then((value) => {
      res.send(value);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
};

const putApplication = (req: Request, res: Response) => {
  const { id, description } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  addApplicationDescription(client, { id, description })
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

export default { putApplication, get, put };
