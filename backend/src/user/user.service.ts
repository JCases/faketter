import { Injectable } from '@nestjs/common';

import { Notes } from '../notes/notes.model';
import { User } from './user.model';

@Injectable()
export class UserService {
  public async getUserNotes(id: string) {
    const userFind = await User.findOne({ where: { id } });
    return userFind.getNotes();
  }

  public async getUserNote(id: string, text: string) {
    const userFind = await User.findOne({ where: { id } });
    const notes = await userFind.getNotes();
    return notes.filter((n: Notes) => n.text === text);
  }

  public async favouritesNote(id: string) {
    const userFind = await User.findOne({ where: { id } });
    return await userFind.getFavoritesNotes();
  }
  public async createNote(id: string, text: string) {
    const userFind = await User.findOne({ where: { id } });
    const notes = new Notes({ text });
    return userFind.addNote(notes);
  }

  public async setFavouriteNote(user: string, note: string) {
    const userFind = await User.findOne({ where: { id: user } });
    const noteFind = await Notes.findOne({ where: { id: note } });
    return await userFind.addFavoriteNote([noteFind]);
  }
}
