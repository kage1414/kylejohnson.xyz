import { NextApiRequest, NextApiResponse } from 'next';

import {
  addExperience,
  deleteExperience,
  getAllExperiences,
  updateExperience,
} from 'dbschema/queries';

import { client } from '../../lib/edgedb';

export default function experienceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { id, employer, position, time, active, priority } = body;
  switch (method) {
    case 'GET':
      getAllExperiences(client)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(JSON.stringify(error));
          res.status(400);
        });
      break;
    case 'PUT':
      if (!id) {
        res.status(400);
      } else {
        updateExperience(client, {
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
      addExperience(client, body)
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
      deleteExperience(client, body)
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
