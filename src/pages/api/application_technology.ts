import { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/edgedb';
import {
  addApplicationTechnology,
  removeApplicationTechnology,
} from 'dbschema/queries';

export default function applicationTechnologyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { id, name, technology_id } = body;
  switch (method) {
    case 'POST':
      addApplicationTechnology(client, { id, name })
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });

      break;
    case 'DELETE':
      if (!id) {
        res.status(400);
        return;
      }
      removeApplicationTechnology(client, { id, technology_id })
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
  }
}
