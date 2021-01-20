import { Controller, Get, Param } from '@nestjs/common';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(protected notesService: NotesService) {}

  @Get('get-notes')
  public async getNotes() {
    return this.notesService.getNotes();
  }

  @Get('get-specific-notes/:text')
  public async getSpecificNotes(@Param('text') text: string) {
    return this.notesService.getSpecificNotes(text);
  }
}
