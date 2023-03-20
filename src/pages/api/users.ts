import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { createUser, getAllUsers } from '../../lib/db';
import auth from '../../middleware/auth';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(auth).post(async (req, res, next) => {
  const { username, password, fullname, email } = req.body;
  if (!username || !password || !fullname || !email) {
    return res.status(400).send('Missing fields');
  }
  const user = {
    username,
    name: fullname,
    email,
    password,
  };
  createUser(user)
    .then((newUser) => {
      res.status(201).json({
        user: newUser,
      });
    })
    .catch((err) => {
      res.status(409).send(err.message);
    });
});

export default handler;
