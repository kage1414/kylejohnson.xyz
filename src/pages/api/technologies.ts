import { NextApiRequest, NextApiResponse } from 'next';

import { getAllTechnologies } from 'dbschema/queries';

import { client } from '../../lib/edgedb';

export default async function technologiesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await getAllTechnologies(client)
        .then((value) => {
          res.send(
            value.map(({ id, name, stack, priority }) => ({
              id,
              name,
              stack: stack?.stack,
              priority,
            }))
          );
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
  }
}
