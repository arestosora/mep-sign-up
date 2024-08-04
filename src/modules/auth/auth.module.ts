import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from '../users/users.module';
import { Services } from 'src/utils/constants';
import { DiscordStrategy } from './utils/DiscordStrategy';
import { SessionSerializer } from 'src/core/SessionSerializer';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService
    },
    DiscordStrategy,
    SessionSerializer
  ]
})
export class AuthModule { }
