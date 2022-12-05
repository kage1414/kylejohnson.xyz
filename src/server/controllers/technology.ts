import { Request, Response } from 'express';
import {
  addApplicationTechnology,
  getAllTechnologies,
  updateTechnology,
} from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllTechnologies(client).then((value) => {
    res.send(
      value.map(({ id, name, stack, priority }) => ({
        id,
        name,
        stack: stack?.stack,
        priority,
      }))
    );
  });
};

const put = (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateTechnology(client, req.body).then((value) => {
    res.send({
      id: value?.id,
      name: value?.name,
      stack: value?.stack?.stack,
      priority: value?.priority,
    });
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

export default { putApplication, get, put };
