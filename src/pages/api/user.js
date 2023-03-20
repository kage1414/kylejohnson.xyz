import nextConnect from 'next-connect';

import {
  createUser,
  deleteUser,
  findUserByUsername,
  updateUserByUsername,
} from '../../lib/db';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {
    console.log(req.body);
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    // const { name, username } = await findUserByUsername(req.body);
    // res.json({ user: { name, username, favoriteColor } })
    res.json({ user: { name: 'asdf', username: 'asdf' } });
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
  .put((req, res) => {
    const { name } = req.body;
    const user = updateUserByUsername(req, req.user.username, { name });
    res.json({ user });
  })
  .delete((req, res) => {
    deleteUser(req);
    req.logOut();
    res.status(204).end();
  });

export default handler;
