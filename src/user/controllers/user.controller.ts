import { Controller, Get } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('Users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  public async getUser(): Promise<UserEntity | undefined> {
    return this._userService.getUser();
  }
}
