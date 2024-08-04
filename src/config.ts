import * as dotenv from 'dotenv';
dotenv.config();

export class Config {

    public static Discord = {
        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
        DISCORD_REDIRECT_URI: '/v1/api/auth/redirect'
    }

    public static Database = {
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        DATABASE: process.env.DB_DATABASE
    }

    public static Session = {
        SECRET: process.env.SESSION_SECRET
    }

    public static Client = {
        ORIGIN: process.env.CLIENT_ORIGIN,
        HOME: 'http://localhost:4200/home',
    }
}