import { Controller, Body, Post, Get, Put, Param } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(protected userService: UserService) {}

  @Get('get-user-notes/:id')
  public async getUserNotes(@Param('id') id: string) {
    return this.userService.getUserNotes(id);
  }

  @Get('get-user-note/:id')
  public async getUserNote(
    @Param('id') id: string,
    @Body() body: { text: string },
  ) {
    return this.userService.getUserNote(id, body.text);
  }

  @Get('favourites-notes/:id')
  public async favouritesNotes(@Param('id') id: string) {
    return this.userService.favouritesNote(id);
  }

  @Post('create-note')
  public async createNote(@Body() body: { user: string; note: string }) {
    return this.userService.createNote(body.user, body.note);
  }

  @Put('favourite-note')
  public async setFavouriteNote(@Body() body: { user: string; note: string }) {
    return this.userService.setFavouriteNote(body.user, body.note);
  }
}
