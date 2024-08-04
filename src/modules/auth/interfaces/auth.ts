import { UserDetails } from "src/utils/types";
import { Users } from "src/modules/database/schemas/Users";
export interface IAuthService {
    validate(details: UserDetails): Promise<Users>;
}