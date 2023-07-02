import { auth } from 'middleware';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(auth).post((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;
