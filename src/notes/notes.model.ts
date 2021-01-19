import { BelongsToManyGetAssociationsMixin, DataTypes, Model } from 'sequelize';

import { db } from '../db';

import { INotes } from '../../../global';

import { User } from 'src/user/user.model';

export class Notes extends Model<INotes> implements INotes {
  public text!: string;

  public getFavoritesUsers!: BelongsToManyGetAssociationsMixin<User>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

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
    sequelize: db.sequelize,
    paranoid: true,
    timestamps: true,
  },
);
