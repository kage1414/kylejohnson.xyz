import { NextApiRequest, NextApiResponse } from 'next';

import { takeSnapshot } from '@/lib/take-snapshot';

export default async function seedHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await takeSnapshot();
      res.status(200).end();
      break;
  }
}
