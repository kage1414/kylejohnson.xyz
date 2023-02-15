import type { NextApiRequest, NextApiResponse } from 'next';
import { getDescription, updateDescription } from 'dbschema/queries';
import { client } from '../../edgedb';

export default function descriptionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method, query } = req;
  const { id } = query || body || {};
  switch (method) {
    case 'GET':
      if (!id) {
        res.status(400);
      } else {
        getDescription(client, { id: id.toString() })
          .then((value) => {
            res.status(200).json(value);
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
    case 'PUT':
      const { description, priority } = body;
      if (!id || !description) {
        res.status(400);
      } else {
        updateDescription(client, {
          id: id.toString(),
          description: description.toString(),
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
  }
}
