import { auth, isAuthenticated } from 'middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import {
  addEducation,
  deleteEducation,
  updateEducation,
} from 'dbschema/queries';

import { client } from '../../lib/edgedb';

const handler = nextConnect();

async function educationHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  switch (method) {
    case 'PUT':
      const { id } = body;
      if (!id) {
        res.status(400);
        return;
      }
      await updateEducation(client, body)
        .then((value) => {
          res.send(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
    case 'POST':
      await addEducation(client, body)
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
      await deleteEducation(client, body)
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

export default handler.use(auth).use(isAuthenticated).all(educationHandler);
