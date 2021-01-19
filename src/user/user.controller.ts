import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

import { IUser } from '../../../global';

@Controller('user')
export class UserController {
  constructor(protected userService: UserService) {}
}
