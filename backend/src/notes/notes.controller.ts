import { Body, Controller, Get } from '@nestjs/common';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(protected notesService: NotesService) {}

  @Get('get-notes')
  public async getNotes() {
    return this.notesService.getNotes();
  }

  @Get('get-specific-notes')
  public async getSpecificNotes(@Body() body: string) {
    return this.notesService.getSpecificNotes(body);
  }
}
