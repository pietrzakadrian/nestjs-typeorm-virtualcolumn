import { VirtualColumn } from 'src/database/decorators/virtual-column.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @VirtualColumn()
  public fullName: string;
}
