import { Model } from 'sequelize';

interface UserFields {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  salt: string;
}

export class User extends Model<UserFields> {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare passwordHash: string;
  declare salt: string;
}
