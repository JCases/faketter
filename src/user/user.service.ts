import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUser } from '../../../global';
import { User } from './user.model';

@Injectable()
export class UserService {
  async get(): Promise<User[]>;
  async get(id: string): Promise<User>;
  async get(id?: string) {
    if (id) {
      return await User.findOne({
        where: { id },
        attributes: { exclude: ['deletedAt'] },
      });
    } else {
      return await User.findAll({
        attributes: { exclude: ['deletedAt'] },
      });
    }
  }
}
