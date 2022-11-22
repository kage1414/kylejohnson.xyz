import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

import sequelize from '../sequelize';

class Description extends Model<
  InferAttributes<Description>,
  InferCreationAttributes<Description>
> {
  declare id: string;
  declare description: string;
}

Description.init(
  {
    id: { type: DataTypes.UUIDV4 },
    description: { type: new DataTypes.STRING(512) },
  },
  { tableName: 'descriptions', sequelize }
);

export default Description;
