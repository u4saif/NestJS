import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

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
  getUsers(
    @Query('role') role?: 'ADMIN' | 'CUSTOMER' | 'SUPERADMIN' | 'INTERN',
  ) {
    return this.userService.findAllUsers(role);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUser(id);
  }

  @Post()
  createUser(@Body(ValidationPipe) data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
