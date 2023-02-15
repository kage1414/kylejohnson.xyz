import type { NextApiRequest, NextApiResponse } from 'next';
import { updateTechnology } from 'dbschema/queries';
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
      updateTechnology(client, body)
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
  }
}
