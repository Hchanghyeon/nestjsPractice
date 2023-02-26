import { createUserDTO } from './dto/create-user';

describe('User', () => {
  it('should be defined', () => {
    expect(new createUserDTO()).toBeDefined();
  });
});
