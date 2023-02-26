import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { createUserDTO } from './dto/create-user';
import { CreateUserErrors } from './group/create-user-errors';
import { FindUserErrors } from './group/find-user-errors';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Post("/create")
    async createUser(@Body() user:createUserDTO):Promise<User | CreateUserErrors>{
        return await this.userService.createUser(user);
    }

    @Get("/find/:id")
    async findUser(@Param('id') id:String):Promise<User | FindUserErrors>{
        return
    }
}
