import { Injectable } from '@nestjs/common';
import { createUserDTO } from './users/dto/create-user';

@Injectable()
export class AppService {
  getUser(): void {
    // read from db
    /*
    const user = new createUserDTO();
    user.name = 'junsuk';
    user.age = 20;
    user.phone = '01087706498';
*/

  }

  getUsers(): void {
    /*
    const user1 = new createUserDTO();
    user1.age = 20;
    user1.name = 'junsuk';
    user1.phone = '01087706498';

    const user2 = new createUserDTO();
    user2.name = 'jueun';
    user2.age = 20;
    user2.phone = '01095996425';

    return [user1, user2];
    */
  }
}
