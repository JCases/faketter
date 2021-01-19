import { User } from '../user/user.model';
import { Notes } from '../notes/notes.model';

export const setDefaultValues = async () => {
  await createUsers();
  await createNotes();
};

const createUsers = async () => {
  const javier = await User.create({ name: 'Javier' });
  await User.create({ name: 'nameTest' });

  console.log('1');

  const createNote = new Notes({ text: 'Created by Javi!' });

  console.log('2');

  await javier.addNote(createNote);

  console.log('3');

  // const association = await Notes.create({ text: 'Example Association!' });

  // javier.addFavoriteNote([association]);
};

const createNotes = async () => {
  await Notes.create({ text: 'Note!' });
};
