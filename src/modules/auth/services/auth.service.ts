import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/modules/users/interfaces/User';
import { Services } from 'src/utils/constants';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class AuthService implements IAuthService {
    constructor(@Inject(Services.USER) private readonly userService: IUserService){
    }

    public async validate(details: UserDetails) {
        const user = await this.userService.find(details.discordId)
        return user ? user: this.userService.create(details);
    }
}
