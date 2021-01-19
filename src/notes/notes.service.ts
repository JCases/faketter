import { Injectable } from '@nestjs/common';
import { Notes } from './notes.model';

@Injectable()
export class NotesService {
  public async getNotes() {
    return await Notes.findAll();
  }

  public async getSpecificNotes(text: string) {
    return await Notes.findAll({ where: { text } });
  }
}
