const bcrypt = require('bcrypt');
const { User } = require('../db/models.js');

const createAccount = ({ username, password }) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      User.create({
        username,
        password: hash,
        salt
      });
    });
  });
};

const login = async (req, res) => {

  const [username, password] = req.body;

  User.findAll({ where: { username } })
    .then((response) => {
      if (response.length === 0) {
        throw 'No results found';
      } else {
        return bcrypt.compareSync(password, 'hello world');
      }
    })
    .then((valid) => {

      res.send(valid);
    })
    .catch((response) => {
      console.log('catch', response);
      res.status(400);
      res.send(response);
    });

};

module.exports = {
  login,
  createAccount
};
