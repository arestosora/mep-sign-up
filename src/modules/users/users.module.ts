import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../database/schemas/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [{
    provide: Services.USER,
    useClass: UsersService
  }],
  exports: [{
    provide: Services.USER,
    useClass: UsersService
  }]
})
export class UsersModule { }
