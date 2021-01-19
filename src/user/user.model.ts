import {
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin,
  Model,
  Sequelize,
} from 'sequelize';

import { IUser } from '../../../global';

import { Notes } from 'src/notes/notes.model';

export class User extends Model<IUser> implements IUser {
  public name!: string;

  public addNote!: HasManyAddAssociationMixin<Notes, Notes>;
  public getNotes!: HasManyGetAssociationsMixin<Notes>;

  public addFavoriteNote!: BelongsToManySetAssociationsMixin<Notes, Notes>;
  public getFavoritesNotes!: BelongsToManyGetAssociationsMixin<Notes>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, unique: true },
    },
    {
      sequelize: sequelize,
      paranoid: true,
      timestamps: true,
    },
  );
};
