import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { User } from './user.model';
import { Notes } from '../notes/notes.model';

describe('User', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('getUserNotes', () => {
    it('should return an array of notes from User', () => {
      const result = new Promise<Notes[]>(() => []);
      jest.spyOn(service, 'getUserNotes').mockImplementation(() => result);

      expect(controller.getUserNotes('')).toMatchObject(result);
    });
  });

  describe('getUserNote', () => {
    it('should return a note from User', () => {
      const result = new Promise<Notes>(() => []);
      jest.spyOn(service, 'getUserNote').mockImplementation(() => result);

      expect(controller.getUserNote('', { text: '' })).toMatchObject(result);
    });
  });

  describe('favouritesNotes', () => {
    it('should return an array of favourites notes from User', () => {
      const result = new Promise<Notes[]>(() => []);
      jest.spyOn(service, 'favouritesNote').mockImplementation(() => result);

      expect(controller.favouritesNotes('')).toMatchObject(result);
    });
  });

  describe('createNote', () => {
    it('should return an object of notes and user', () => {
      const result = new Promise<{ user: User; note: Notes }>(() => []);
      jest.spyOn(service, 'createNote').mockImplementation(() => result);

      expect(controller.createNote({ user: '', note: '' })).toMatchObject(
        result,
      );
    });
  });

  describe('setFavouriteNote', () => {
    it('should return an boolean', () => {
      const result = new Promise<boolean>(() => true);
      jest.spyOn(service, 'setFavouriteNote').mockImplementation(() => result);

      expect(controller.setFavouriteNote({ user: '', note: '' })).toMatchObject(
        result,
      );
    });
  });

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });
});
