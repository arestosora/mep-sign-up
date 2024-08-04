import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/modules/database/schemas/Users';
import { Repository } from 'typeorm';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class UsersService implements IUserService {

    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) { }
    public async create(details: UserDetails) {
        const user = this.userRepository.create(details);
        return this.userRepository.save(user);
    }

    public async find(id: string) {
        return this.userRepository.findOne({ loadRelationIds: true, where: { discordId: id }});
    }
}
