import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { TypeormStore } from 'connect-typeorm';
import { Session } from './modules/database/schemas/Session';
import { DataSource } from 'typeorm';
import { Config } from './config';
import * as passport from 'passport';

async function main() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = app.get(DataSource).getRepository(Session);
  app.setGlobalPrefix('v1/api');
  app.use(session({
    secret: Config.Session.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 24 * 7
    },
    store: new TypeormStore().connect(sessionRepository)
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors()
  await app.listen(3000);
}
main();
