import { NextApiRequest, NextApiResponse } from 'next';

import { getAllApplications } from 'dbschema/queries';

import { client } from '../../lib/edgedb';

export default async function applicationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await getAllApplications(client)
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
