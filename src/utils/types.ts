import { Users } from "src/modules/database/schemas/Users";

export type UserDetails = {
    discordId: string;
    username: string;
}

export type Done = (err: Error, user: Users) => void;