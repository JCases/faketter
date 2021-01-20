import { Test, TestingModule } from '@nestjs/testing';

import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

import { Notes } from './notes.model';

describe('Notes', () => {
  let controller: NotesController;
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
      controllers: [NotesController],
    }).compile();

    controller = module.get<NotesController>(NotesController);
    service = module.get<NotesService>(NotesService);
  });

  describe('getNotes', () => {
    it('should return an array of notes', () => {
      const result = new Promise<Notes[]>(() => []);
      jest.spyOn(service, 'getNotes').mockImplementation(() => result);

      expect(controller.getNotes()).toMatchObject(result);
    });
  });

  describe('getSpecificNotes', () => {
    it('should return an array of notes with string', () => {
      const result = new Promise<Notes[]>(() => []);
      jest.spyOn(service, 'getSpecificNotes').mockImplementation(() => result);

      expect(controller.getSpecificNotes('test')).toMatchObject(result);
    });
  });

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });
});
