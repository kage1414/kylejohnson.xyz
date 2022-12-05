import { Request, Response } from 'express';
import { getAllEducations, updateEducation } from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllEducations(client)
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const put = (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateEducation(client, req.body)
    .then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

export default { get, put };
