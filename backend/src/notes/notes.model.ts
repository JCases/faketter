import {
  BelongsToManyGetAssociationsMixin,
  DataTypes,
  Model,
  Sequelize,
} from 'sequelize';

import { INotes } from '../../../global';

import { User } from 'src/user/user.model';

export class Notes extends Model<INotes> implements INotes {
  public text!: string;

  public getFavoritesUsers!: BelongsToManyGetAssociationsMixin<User>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export const initNotes = (sequelize: Sequelize) => {
  Notes.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      text: { type: DataTypes.STRING },
    },
    {
      sequelize: sequelize,
      paranoid: true,
      timestamps: true,
    },
  );
};
