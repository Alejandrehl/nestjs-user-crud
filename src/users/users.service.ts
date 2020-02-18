import { CreateUserDto } from './dto/create-user-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async createUser(newUser: CreateUserDto) {
    const user = new User();
    user.email = newUser.email;
    user.password = newUser.password;

    return await this.userRepository.save(user);
  }

  async updateUser(userId: number, updateUser: CreateUserDto) {
    const user = await this.userRepository.findOne(userId);
    user.email = updateUser.email;
    user.password = updateUser.password;

    return await this.userRepository.save(user);
  }

  async deleteUser(userId: number) {
    return await this.userRepository.delete(userId);
  }
}
