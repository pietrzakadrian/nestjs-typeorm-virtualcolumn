import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async getUsers(): Promise<UserEntity[] | undefined> {
    const queryBuilder = this._userRepository.createQueryBuilder('user');

    queryBuilder.addSelect(
      "user.firstName || ' ' || user.lastName",
      'fullName',
    );

    return queryBuilder.getMany();
  }

  public async getUser(): Promise<UserEntity | undefined> {
    const queryBuilder = this._userRepository.createQueryBuilder('user');

    queryBuilder.addSelect(
      "user.firstName || ' ' || user.lastName",
      'fullName',
    );

    return queryBuilder.getOne();
  }
}
