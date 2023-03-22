import nextConnect from 'next-connect';

import passport from '../../lib/passport';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  delete req.user.hash;
  delete req.user.salt;
  res.json({ user: req.user });
});

export default handler;
