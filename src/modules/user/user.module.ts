import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/database/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserResolver } from 'src/api/user.resolver';
@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            global: true,
            secret: 'nestjs',
            signOptions: { expiresIn: '2h' },
        }),
    ],
    providers: [UserResolver, UserService],
    exports: [UserService],
})
export class UserModule {}
