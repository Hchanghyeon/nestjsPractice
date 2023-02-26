import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createUserDTO } from './dto/create-user';
import { CreateUserErrors } from './group/create-user-errors';
import { FindUserErrors } from './group/find-user-errors';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    async createUser(user:createUserDTO):Promise<User | CreateUserErrors>{
        return await this.prisma.user.create({
            data:{
                name:user.name,
                email:user.email
            }
        });
    }

    async findUser(id:String):Promise<User | FindUserErrors>{
        return
    }
}
