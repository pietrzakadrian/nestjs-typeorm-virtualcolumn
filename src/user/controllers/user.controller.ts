import { Controller, Get } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('Users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('many')
  public async getUsers(): Promise<UserEntity[] | undefined> {
    return this._userService.getUsers();
  }

  @Get('one')
  public async getUser(): Promise<UserEntity | undefined> {
    return this._userService.getUser();
  }
}
