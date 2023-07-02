import { auth } from 'middleware';
import nextConnect from 'next-connect';

import {
  createUser,
  deleteUser,
  findUserByUsername,
  updateUserByUsername,
} from '../../lib/db';

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req, res) => {
    const user = req?.session?.passport?.user
      ? await findUserByUsername(req.session.passport.user).then((user) => {
          delete user.hash;
          delete user.salt;
          return user;
        })
      : undefined;

    res.json({ user });
  })
  .post((req, res) => {
    const { username, password, name } = req.body;
    createUser({ username, password, name });
    res.status(200).json({ success: true, message: 'created new user' });
  })
  .use((req, res, next) => {
    // handlers after this (PUT, DELETE) all require an authenticated user
    // This middleware to check if user is authenticated before continuing
    if (!req.user) {
      res.status(401).send('unauthenticated');
    } else {
      next();
    }
  })
  .put(async (req, res) => {
    const { name } = req.body;
    const user = await updateUserByUsername(req, req.user.username, { name });
    res.json({ user });
  })
  .delete((req, res) => {
    deleteUser(req);
    req.logOut();
    res.status(204).end();
  });

export default handler;
