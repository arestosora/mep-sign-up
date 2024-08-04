import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-discord";
import { Services } from "src/utils/constants";
import { IAuthService } from "../interfaces/auth";
import { Config } from "src/config";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(Services.AUTH) private readonly authService: IAuthService) {
        super({
            clientID: Config.Discord.DISCORD_CLIENT_ID,
            clientSecret: Config.Discord.DISCORD_CLIENT_SECRET,
            callbackURL: Config.Discord.DISCORD_REDIRECT_URI,
            scope: ['identify'],
        });
    }

    public async validate(accessToken: string, refreshToken: string, profile: Profile) {
        return this.authService.validate({ discordId: profile.id, username: profile.username })
    }
}
