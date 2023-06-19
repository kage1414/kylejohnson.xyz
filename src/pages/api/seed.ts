import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { auth, isAuthenticated } from 'middleware';

import { seed } from '../../lib/seed';

const handler = nextConnect();

async function seedHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await seed();
      res.status(200).end();
      break;
  }
}

export default handler.use(auth).use(isAuthenticated).all(seedHandler);
