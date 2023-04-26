import { auth, isAuthenticated } from 'middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { client } from '@/lib/edgedb';
import {
  addApplicationTechnology,
  removeApplicationTechnology,
} from 'ui/dbschema/queries';

const handler = nextConnect();

async function applicationTechnologyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { id, name, technology_id } = body;
  switch (method) {
    case 'POST':
      await addApplicationTechnology(client, { id, name })
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
      await removeApplicationTechnology(client, { id, technology_id })
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

export default handler
  .use(auth)
  .use(isAuthenticated)
  .all(applicationTechnologyHandler);
