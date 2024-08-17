import { IsEmail, IsEnum, isEnum, IsNotEmpty } from 'class-validator';

enum ROLE {
  'ADMIN',
  'CUSTOMER',
  'SUPERADMIN',
  'INTERN',
}
export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(ROLE, {
    message: 'Invalid Role provided.',
  })
  role: ROLE;
}
