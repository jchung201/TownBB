import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Meta
  @Column()
  title: string;
  @Column('text', { nullable: true })
  description: string;
  @Column()
  location: string;
  @Column({ type: 'float' })
  longitude: number;
  @Column({ type: 'float' })
  latitude: number;

  @Column({ nullable: true })
  value: string;
  @Column('text', { array: true })
  categories: string[];
  @Column('text', { array: true })
  images: string[];
  @Column('text', { nullable: true })
  company: string;

  // Contact
  @Column()
  contactEmail: string;
  @Column('text', { nullable: true })
  contactPhone: string;
  @Column('text', { nullable: true })
  contactWebsite: string;

  // Auth
  @Column()
  hash: string;
  @Column()
  password: string;

  // Deleted
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
