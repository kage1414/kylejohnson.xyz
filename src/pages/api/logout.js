import nextConnect from 'next-connect';

import { auth } from 'middleware';

const handler = nextConnect();

handler.use(auth).post((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;
