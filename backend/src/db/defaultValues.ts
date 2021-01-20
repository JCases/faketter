import { User } from '../user/user.model';
import { Notes } from '../notes/notes.model';

export const setDefaultValues = async () => {
  const javier = await createUsers();
  await createNotes(javier);
};

const createUsers = async () => {
  if ((await User.findAll({ where: { name: 'nameTest' } })).length === 0) {
    const javier = await User.create({ name: 'Javier' });

    const createNote = await Notes.create({ text: 'Created by Javi!' });

    await createNote.setUser(javier);

    const associationWithUser = await Notes.create({
      text: 'Example Association with User!',
    });

    associationWithUser.setUser(javier);
    javier.addFavourite([associationWithUser]);

    return await User.create({ name: 'nameTest' });
  }
};

const createNotes = async (user: User) => {
  (await Notes.create({ text: 'Note!' })).setUser(user);
};
