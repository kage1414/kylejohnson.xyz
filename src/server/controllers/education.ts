import { Request, Response } from 'express';
import { getAllEducations, updateEducation } from '../../../dbschema/queries';
import { client } from '../edgedb';

const get = (req: Request, res: Response) => {
  getAllEducations(client).then((value) => {
    res.send(value);
  });
};

const put = (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    res.sendStatus(400);
    return;
  }
  updateEducation(client, req.body).then((value) => {
    res.send(value);
  });
};

export default { get, put };
