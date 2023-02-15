import { NextApiRequest, NextApiResponse } from 'next';
import { getAllTechnicalSkills } from 'dbschema/queries';
import { client } from '../../edgedb';

export default async function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await getAllTechnicalSkills(client)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.status(400).end(error);
        });
      break;
  }
}
