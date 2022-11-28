import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

export const sequelize = new Sequelize(
  'postgresql://localhost:5432/kylejohnson_xyz',
  {
    logging: false,
    dialect: 'postgres',
  }
);

export const Experience = sequelize.define('Experience', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  employer: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
  position: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  time: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
});

export const Technology = sequelize.define('Technology', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: new DataTypes.STRING(),
  },
  url: {
    type: new DataTypes.STRING(),
    allowNull: true,
  },
});

export const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: new DataTypes.STRING(128),
    // allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
  url: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
});

export const Education = sequelize.define('Education', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  school: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  time: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  certificate: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  degree: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
});

export const TechStack = sequelize.define('TechStack', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  stack: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
});

export const Description = sequelize.define('Description', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  description: {
    type: new DataTypes.STRING(512),
  },
});

Experience.hasMany(Description, {
  sourceKey: 'id',
  foreignKey: 'experienceId',
});

Application.hasMany(Technology, {
  sourceKey: 'id',
  foreignKey: 'applicationId',
});

Application.hasMany(Description, {
  sourceKey: 'id',
  foreignKey: 'applicationId',
});

TechStack.hasMany(Technology, {
  sourceKey: 'id',
  foreignKey: 'techStackId',
});
