import { Sequelize } from 'sequelize/types';

import { initUser } from '../user/user.model';
import { initNotes } from '../notes/notes.model';

export const createModels = (sequelize: Sequelize) => {
  initUser(sequelize);
  initNotes(sequelize);
};
