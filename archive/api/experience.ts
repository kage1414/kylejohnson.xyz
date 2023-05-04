import { auth, isAuthenticated } from 'middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import {
  addExperience,
  deleteExperience,
  getAllExperiences,
  updateExperience,
} from 'dbschema/queries';

import { client } from '../../lib/edgedb';

const handler = nextConnect();

async function experienceGetter(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await getAllExperiences(client)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(JSON.stringify(error));
          res.status(400);
        });
      break;
  }
}

async function experienceModifier(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  const { id, employer, position, time, active, priority } = body;
  switch (method) {
    case 'PUT':
      if (!id) {
        res.status(400);
      } else {
        await updateExperience(client, {
          id,
          employer,
          position,
          time,
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
      await addExperience(client, body)
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
      await deleteExperience(client, body)
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

export default handler
  .use(auth)
  .get(experienceGetter)
  .use(isAuthenticated)
  .all(experienceModifier);
