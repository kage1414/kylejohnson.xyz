import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { takeSnapshot } from '@/lib/take-snapshot';
import { auth, isAuthenticated } from 'middleware';

const handler = nextConnect();

async function seedHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await takeSnapshot();
      res.status(200).end();
      break;
  }
}

export default handler.use(auth).use(isAuthenticated).all(seedHandler);
