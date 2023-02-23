import { NextApiRequest, NextApiResponse } from 'next';

import { getAllApplications, updateApplication } from 'dbschema/queries';

import { client } from '../../edgedb';

export default function applicationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case 'GET':
      getAllApplications(client)
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
