import nextConnect from 'next-connect';

import { createUser, findUserByUsername, getAllUsers } from '../../lib/db';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  const { username, password, name, email } = req.body;
  if (!username || !password || !name) {
    return res.status(400).send('Missing fields');
  }
  // Here you check if the username has already been used
  const usernameExisted = await findUserByUsername(req, username);
  if (!!usernameExisted) {
    return res.status(409).send('The username has already been used');
  } else {
    const user = { username, password, name, email };
    await createUser(req, user)
      .then(() => {
        req.logIn(user, (err) => {
          if (err) throw err;
          // Log the signed up user in
          res.status(201).json({
            user,
          });
        });
      })
      .catch((err) => {
        console.log({ err });
        res.status(400).send(err);
      });
  }
});

export default handler;
