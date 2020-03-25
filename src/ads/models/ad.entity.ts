import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from '../../auth/models/user.entity';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  rate: string;

  @Column()
  location: string;

  @Column()
  category: string;

  @ManyToOne(
    type => User,
    user => user.ads,
    { eager: false },
  )
  user: User;

  @Column()
  userId: number;
}
