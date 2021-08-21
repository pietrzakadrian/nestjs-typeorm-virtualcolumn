import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async getUser(): Promise<UserEntity | undefined> {
    const queryBuilder = this._userRepository.createQueryBuilder('user');

    queryBuilder.addSelect(
      "user.firstName || ' ' || user.lastName",
      'user_fullName',
    );

    return queryBuilder.getOne();
  }
}
