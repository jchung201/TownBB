import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from '../dtos/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { username, password } = authCredentialsDTO;
    const user = new User();
    user.username = username;
    user.password = password;
    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Username already exists!');
      else throw new InternalServerErrorException();
    }
  }
}
