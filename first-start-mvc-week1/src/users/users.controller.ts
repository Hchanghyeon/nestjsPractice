import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { createUserDTO } from './dto/create-user';
import { CreateUserErrors } from './error/create-user-errors';
import { FindUserErrors } from './error/find-user-errors';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post("/create")
    async createUser(@Body() user: createUserDTO): Promise<User | CreateUserErrors> {
        try {
            return await this.userService.createUser(user);
        } catch (e) {
            if (e.meta.target[0] === 'email') {
                return CreateUserErrors.AlreadyEmailExist;
            }
        }
    }

    @Get("/find/:id")
    async findUser(@Param('id') id: String): Promise<User | FindUserErrors> {
        const userOrNull: User | FindUserErrors = await this.userService.findUser(id);
        return userOrNull ? userOrNull : FindUserErrors.NotFound;
    }
}
