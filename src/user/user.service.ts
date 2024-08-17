import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private USERS = [
    { id: 1, name: 'Saif', email: 'saif@gmail.com', role: 'CUSTOMER' },
    { id: 2, name: 'Raja', email: 'Raja@gmail.com', role: 'ADMIN' },
    { id: 3, name: 'Xebia', email: 'xebia@xebia.com', role: 'SUPERADMIN' },
    { id: 4, name: 'Ani', email: 'ani@gmail.com', role: 'INTERN' },
  ];
  findAllUsers(role?) {
    return role ? this.USERS.filter((item) => item.role == role) : this.USERS;
  }

  findUser(id) {
    return id ? this.USERS.find((item) => item.id == id) : [];
  }

  createUser(data) {
    this.USERS.push(data);
    return { message: 'User created ', ...data };
  }
}
