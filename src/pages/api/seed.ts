import { NextApiRequest, NextApiResponse } from 'next';

import { seed } from '../../seed';

export default async function seedHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await seed();
      res.status(200).end();
      break;
  }
}
