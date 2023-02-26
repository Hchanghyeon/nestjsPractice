import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createUserDTO } from './dto/create-user';
import { CreateUserErrors } from './error/create-user-errors';
import { FindUserErrors } from './error/find-user-errors';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    async createUser(user:createUserDTO):Promise<User | CreateUserErrors>{
        let result : User | CreateUserErrors;
        try {
             result = await this.prisma.user.create({
                data:{
                    name:user.name,
                    email:user.email
                }
            });
        } catch(e){
            if(e.meta.target[0] === 'email'){
                result = CreateUserErrors.AlreadyEmailExist;
            }
        }
        return result;
    }

    async findUser(id:String):Promise<User | FindUserErrors>{
        let result: User | FindUserErrors = await this.prisma.user.findUnique({where:{id:Number(id)}});
        return result ? result : result = FindUserErrors.NotFound;
    }
}
