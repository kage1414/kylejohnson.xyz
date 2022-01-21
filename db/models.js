const { Sequelize, DataTypes } = require('sequelize');
const { username, password, host, db } = require('./config.js');
const sequelize = new Sequelize(db, username, password, {
  host,
  dialect: 'mysql',
  // logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('not connected');
  });

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

const Session = sequelize.define('session', {
  cookie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
});

Session.belongsTo(User);

sequelize.sync()
  .then(() => {
    console.log('sync success');
  })
  .catch(() => {
    console.log('Connected');
  });

module.exports.User = User;
module.exports.Session = Session;
