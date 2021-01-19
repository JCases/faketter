import { User } from '../user/user.model';
import { Notes } from '../notes/notes.model';

export const setAssociations = () => {
  User.belongsToMany(Notes, {
    through: 'UserNotes',
    foreignKey: 'userFavoriteID',
  });
  Notes.belongsToMany(User, {
    through: 'UserNotes',
    foreignKey: 'userFavoriteID',
  });

  User.hasMany(Notes, { foreignKey: 'userID' });
  Notes.belongsTo(User, { foreignKey: 'userID' });
};
