import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';

import { AppService } from './app.service';

@Module({
  imports: [UserModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
