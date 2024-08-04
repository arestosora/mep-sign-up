import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [PassportModule.register({ session: true })]
})
export class SessionPassportModule { }
