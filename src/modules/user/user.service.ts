import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateOneUserArgs, UserCreateInput, UserUpdateInput } from 'src/shared/prismagraphql/user';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/user-login-dto';
@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async create(userCreateInput: UserCreateInput) {
        const { email, password, name } = userCreateInput;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        const payload = { sub: user.id, username: user.name };
        return {
            username: user.name,
            jwt: await this.jwtService.signAsync(payload),
        };
    }
    async findOne(id: number) {
        return await this.prisma.user.findFirst({
            where: {
                id: id,
            },
        });
    }

    async update(userUpdateInput: UserUpdateInput, id: number) {
        return await this.prisma.user.update({
            data: userUpdateInput,
            where: { id: id },
        });
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Pastikan user.password adalah string sebelum dibandingkan dengan bcrypt
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Invalid password');
        }

        const payload = { sub: user.id, username: user.name };
        return {
            username: user.name,
            jwt: await this.jwtService.signAsync(payload),
        };
    }
}
