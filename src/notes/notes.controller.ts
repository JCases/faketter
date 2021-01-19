import { Controller } from '@nestjs/common';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(protected notesService: NotesService) {}
}
