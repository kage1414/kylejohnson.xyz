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
