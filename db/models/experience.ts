import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import Description from './description';

import sequelize from '../sequelize';

class Experience extends Model<
  InferAttributes<Experience>,
  InferCreationAttributes<Experience>
> {
  declare id: string;
  declare employer: string;
  declare active: boolean;
  declare position: string;
  declare description: string;
  declare time: string;
}

Experience.init(
  {
    id: {
      type: DataTypes.UUIDV4,
    },
    employer: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    active: {
      type: new DataTypes.BOOLEAN(),
    },
    position: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    time: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { tableName: 'experiences', sequelize }
);

Experience.hasMany(Description, {
  sourceKey: 'id',
  foreignKey: 'experienceId',
  as: 'experiences',
});
