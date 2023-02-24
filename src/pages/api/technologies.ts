import { NextApiRequest, NextApiResponse } from 'next';

import { getAllTechnologies } from 'dbschema/queries';

import { client } from '../../edgedb';

export default function technologiesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      getAllTechnologies(client)
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
