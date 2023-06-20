import nextConnect from 'next-connect';

import { auth } from 'middleware';

const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  await req.logOut();
  res.status(204).end();
});

export default handler;
