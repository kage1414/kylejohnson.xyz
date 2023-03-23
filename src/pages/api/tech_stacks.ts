import { NextApiRequest, NextApiResponse } from 'next';

import { getTechStacks } from 'dbschema/queries';

import { client } from '../../lib/edgedb';

export default function techStacksHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      getTechStacks(client)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
  }
}
