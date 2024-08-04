import { Config } from "src/config";
import { Entities } from "../schemas";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: Config.Database.HOST,
    username: Config.Database.USERNAME,
    password: Config.Database.PASSWORD,
    port: parseInt(Config.Database.PORT),
    database: Config.Database.DATABASE,
    synchronize: true,
    entities: Entities
}