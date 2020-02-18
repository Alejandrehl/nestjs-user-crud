import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return 'Usuario Creado';
  }

  @Get()
  getAll() {
    return 'Lista de Usuarios';
  }

  @Put(':id')
  update(@Body() updateUserDto: CreateUserDto) {
    return 'Usuario Actualizado';
  }

  @Delete(':id')
  delete() {
    return 'Usuario Eliminado';
  }
}
