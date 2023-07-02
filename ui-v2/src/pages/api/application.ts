import { auth, isAuthenticated } from 'middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import {
  addApplication,
  deleteApplication,
  updateApplication,
} from 'dbschema/queries';

import { client } from '../../lib/edgedb';

const handler = nextConnect();

async function applicationHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  const { id, name, url, active, priority } = body;
  switch (method) {
    case 'PUT':
      if (!id) {
        res.status(400);
      } else {
        await updateApplication(client, {
          id,
          name,
          url,
          active,
          priority,
        })
          .then((value) => {
            res.status(200).json(value);
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
    case 'POST':
      await addApplication(client, body)
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
      await deleteApplication(client, body)
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

export default handler.use(auth).use(isAuthenticated).all(applicationHandler);
