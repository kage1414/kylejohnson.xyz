import { NextApiRequest, NextApiResponse } from 'next';

import {
  addEducation,
  deleteEducation,
  updateEducation,
} from 'dbschema/queries';

import { client } from '../../edgedb';

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case 'PUT':
      const { id } = body;
      if (!id) {
        res.status(400);
        return;
      }
      updateEducation(client, body)
        .then((value) => {
          res.send(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
    case 'POST':
      addEducation(client, body)
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
      deleteEducation(client, body)
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
