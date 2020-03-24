import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from '../../auth/models/user.entity';

@Entity()
export class Job extends BaseEntity {
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
    user => user.jobs,
    { eager: false },
  )
  user: User;

  @Column()
  userId: number;
}
