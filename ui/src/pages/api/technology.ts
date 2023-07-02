import { auth, isAuthenticated } from 'middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import {
  addTechnology,
  deleteTechnology,
  updateTechnology,
} from 'dbschema/queries';

import { client } from '../../lib/edgedb';

const handler = nextConnect();

async function technologyHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  switch (method) {
    case 'PUT':
      const { id } = body;
      if (!id) {
        res.status(400);
        return;
      }
      await updateTechnology(client, body)
        .then((value) => {
          res.send({
            id: value?.id,
            name: value?.name,
            stack: value?.stack?.stack,
            priority: value?.priority,
          });
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
    case 'POST':
      await addTechnology(client, body)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          console.error(error);
          res.write(error);
          res.status(400);
        });

      break;
    case 'DELETE':
      await deleteTechnology(client, body)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          console.error(error);
          res.write(error);
          res.status(400);
        });

      break;
  }
}

export default handler.use(auth).use(isAuthenticated).all(technologyHandler);
