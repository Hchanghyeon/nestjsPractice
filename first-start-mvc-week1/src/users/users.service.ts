import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createUserDTO } from './dto/create-user';
import { CreateUserErrors } from './error/create-user-errors';
import { FindUserErrors } from './error/find-user-errors';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async createUser(user: createUserDTO): Promise<User> {
        return await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email
            }
        });
    }

    async findUser(id: String): Promise<User> {
        return await this.prisma.user.findUnique({ where: { id: Number(id) } });
    }
}
