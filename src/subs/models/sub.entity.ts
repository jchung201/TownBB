import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sub extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Meta
  @Column()
  category: string;
  @Column('text', { nullable: true })
  email: string;

  // deleted
  @Column({ default: false })
  deleted: boolean;
  @Column('date', { nullable: true })
  deletedAt: Date;
}
