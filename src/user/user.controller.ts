import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  /**
     GET users
     GET users/:id
     POST create user
     PUT users/:id update user with ID
    **/
  constructor(private userService: UserService) {}
  @Get()
  getUsers(@Query('role') role?:'ADMIN' | 'CUSTOMER' | 'SUPERADMIN' | 'INTERN' ) {
    return this.userService.findAllUsers(role);
  }

  @Get(':id')
  getUser(@Param('id') id:string) {
    return this.userService.findUser(+id);
  }

  @Post()
  createUser(@Body() data){
    return this.userService.createUser(data);
  }
}
