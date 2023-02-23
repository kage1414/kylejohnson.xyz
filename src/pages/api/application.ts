import { NextApiRequest, NextApiResponse } from 'next';

import {
  addApplication,
  deleteApplication,
  updateApplication,
} from 'dbschema/queries';

import { client } from '../../edgedb';

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { id, name, url, active, priority } = body;
  switch (method) {
    case 'PUT':
      if (!id) {
        res.status(400);
      } else {
        updateApplication(client, {
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
      addApplication(client, body)
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
      deleteApplication(client, body)
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
