import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { findUserByUsername, validatePassword } from './db';

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(async function (username, done) {
  const user = await findUserByUsername(username);
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      const user = await findUserByUsername(username);

      if (!user || !validatePassword(user, password)) {
        done(null, false);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
