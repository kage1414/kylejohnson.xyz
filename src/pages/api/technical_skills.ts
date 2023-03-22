import { NextApiRequest, NextApiResponse } from 'next';

import { getAllTechnicalSkills } from 'dbschema/queries';

import { client } from '../../lib/edgedb';

export default async function technicalSkillsHandler(
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
