import { IsEmail, IsNumber, IsString } from "class-validator";

export class createUserDTO {
  @IsNumber()
  id?:number;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  name: string;
}
