import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  async afterLoad(user: UserEntity): Promise<void> {
    user.fullName = user.firstName + ' ' + user.lastName;
  }
}
