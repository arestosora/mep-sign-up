import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { Users } from "src/modules/database/schemas/Users";
import { IUserService } from "src/modules/users/interfaces/User";
import { Services } from "src/utils/constants";
import { Done } from "src/utils/types";

export class SessionSerializer extends PassportSerializer {
    constructor(@Inject(Services.USER) private readonly userService: IUserService) {
        super();
    }
    serializeUser(user: Users, done: Done) {
        done(null, user)
    }

    public async deserializeUser(user: Users, done: Done) {
        try {
            const userInstance = await this.userService.find(user.discordId);
            const userDb = { username: userInstance.username, orders: [], id: userInstance.id, discordId: userInstance.discordId, createdAt: userInstance.createdAt, updatedAt: userInstance.updatedAt }
            return userInstance ? done(null, userDb) : done(null, null);
        } catch (error) {

        }
    }
}