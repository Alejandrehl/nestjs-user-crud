import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() response) {
    this.usersServices
      .createUser(createUserDto)
      .then(res => response.status(HttpStatus.CREATED).json(res))
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error en la creación de un usuario.' }),
      );
  }

  @Get()
  getAll(@Res() response) {
    this.usersServices
      .getAll()
      .then(userList => response.status(HttpStatus.OK).json(userList))
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error en la obtención de usuarios.' }),
      );
  }

  @Put(':id')
  update(
    @Body() updateUserDto: CreateUserDto,
    @Res() response,
    @Param('id') userId,
  ) {
    this.usersServices
      .updateUser(userId, updateUserDto)
      .then(res => response.status(HttpStatus.OK).json(res))
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error en la edición del usuario.' }),
      );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') userId) {
    this.usersServices
      .deleteUser(userId)
      .then(res => response.status(HttpStatus.OK).json({ res }))
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error en la eliminación del usuario.' }),
      );
  }
}
