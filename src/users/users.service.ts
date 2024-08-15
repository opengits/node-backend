import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'shared-orm-library';
import { User } from 'shared-orm-library/dist/entities/user.entity';


@Injectable()
export class UsersService {
  private userRepository = AppDataSource.getRepository(User);

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
