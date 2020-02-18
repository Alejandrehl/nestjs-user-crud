import { Controller, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body createUserDto: CreateUserDto) {}
}
