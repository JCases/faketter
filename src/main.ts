import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

import { MAX_SIZE_JSON, PORT } from './app.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: MAX_SIZE_JSON }));
  app.use(bodyParser.urlencoded({ limit: MAX_SIZE_JSON, extended: true }));
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
