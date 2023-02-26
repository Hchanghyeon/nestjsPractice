import { IsEmail, IsString } from "class-validator";

export class createUserDTO {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  name: string;
}
