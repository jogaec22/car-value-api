import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import {CookieSession} from 'cookie-session';
//import cookieSession from 'cookie-session';
const cookieSession = require('cookie-session');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['afef3r']
  }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(3000);
}
bootstrap();
