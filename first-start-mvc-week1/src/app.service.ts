import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class AppService {
  getUser(): User {
    // read from db
    const user = new User();
    user.name = 'junsuk';
    user.age = 20;
    user.phone = '01087706498';

    return user;
  }

  getUsers(): User[] {
    const user1 = new User();
    user1.age = 20;
    user1.name = 'junsuk';
    user1.phone = '01087706498';

    const user2 = new User();
    user2.name = 'jueun';
    user2.age = 20;
    user2.phone = '01095996425';

    return [user1, user2];
  }
}
