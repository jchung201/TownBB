import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Sub extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Meta
  @Column()
  category: string;
  @Column('text', { nullable: true })
  email: string;

  // Deleted
  @Column()
  hash: string;
  @Column({ default: false })
  deleted: boolean;
  @Column('date', { nullable: true })
  deletedAt: Date;

  // TimeStamps
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
}
