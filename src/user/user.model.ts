import {
  BelongsToManyAddAssociationsMixin,
  BelongsToManyGetAssociationsMixin,
  DataTypes,
  Model,
} from 'sequelize';

import { db } from '../db';

import { Notes } from '../notes/notes.model';

import { IUser } from '../../../global';

export class User extends Model<IUser> implements IUser {
  public name!: string;

  public addNotes!: BelongsToManyAddAssociationsMixin<Notes, string>;
  public getNotes!: BelongsToManyGetAssociationsMixin<Notes>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
  },
  {
    sequelize: db.sequelize,
    paranoid: true,
    timestamps: true,
  },
);
