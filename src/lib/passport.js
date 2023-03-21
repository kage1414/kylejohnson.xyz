import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { findUserByUsername, validatePassword } from './db';

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.username);
});

passport.deserializeUser(function (id, done) {
  // deserialize the username back into user object
  const user = findUserByUsername(id);
  done(null, user);
});

const strat = new LocalStrategy(
  { passReqToCallback: true },
  async (req, username, password, done) => {
    // Here you lookup the user in your DB and compare the password/hashed password
    const user = await findUserByUsername(username);
    // Security-wise, if you hashed the password earlier, you must verify it
    // if (!user || await argon2.verify(user.password, password))
    if (!user || !validatePassword(user, password)) {
      done(null, false);
    } else {
      done(null, user);
    }
  }
);
passport.use(strat);

export default passport;
