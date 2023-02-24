import { NextApiRequest, NextApiResponse } from 'next';

import { seed } from '../../seed';

export default async function educationHandler(
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
