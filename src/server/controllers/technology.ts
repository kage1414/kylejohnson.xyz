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
      value.map(({ id, name, stack }) => ({
        id,
        name,
        stack: stack?.stack,
      }))
    );
  });
};

const put = (req: Request, res: Response) => {
  const { id, name, stack } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateTechnology(client, { id, name, stack }).then((value) => {
    res.send({
      id: value?.id,
      name: value?.name,
      stack: value?.stack?.stack,
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
