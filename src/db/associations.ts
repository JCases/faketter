import { User } from '../user/user.model';
import { Notes } from '../notes/notes.model';

export const setAssociations = () => {
  User.hasMany(Notes, { foreignKey: 'notesID' });
  Notes.belongsTo(User, { foreignKey: 'notesID' });
};
