import { IsEmpty, IsString, IsEnum, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ENGINEER', 'INTERN', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: 'ENGINEER' | 'INTERN' | 'ADMIN';
}
