import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  getHello() {
    const user = this.appService.getUser();
    return { user };
  }

  @Get('/users')
  @Render('users')
  getUsers() {
    const users = this.appService.getUsers();
    return { users };
  }
}
