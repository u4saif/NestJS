export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'CUSTOMER' | 'SUPERADMIN' | 'INTERN';
}
