import { auth } from "middleware";
import nextConnect from "next-connect";

import { createUser } from "../../ui/src/lib/db";

const handler = nextConnect();

handler.use(auth).post(async (req, res, next) => {
  const { username, password, fullname, email, key } = req.body;
  if (!username || !password || !fullname || !email) {
    return res.status(400).send("Missing fields");
  }
  const user = {
    username,
    name: fullname,
    email,
    password,
    key,
  };
  createUser(user)
    .then((newUser) => {
      req.logIn(user, (err) => {
        if (err) throw err;
        // Log the signed up user in
        res.status(201).json({
          user,
        });
      });
    })
    .catch((err) => {
      res.status(409).send(err.message);
    });
});

export default handler;
