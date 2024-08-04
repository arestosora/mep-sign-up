import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/services/auth.service';
import { UsersModule } from './modules/users/users.module';
import { SessionPassportModule } from './modules/passport/passport.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, SessionPassportModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule { }
