import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/services/auth.service';
import { UsersModule } from './modules/users/users.module';
import { SessionPassportModule } from './modules/passport/passport.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, SessionPassportModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule { }
