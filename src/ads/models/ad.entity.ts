import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Meta
  @Column()
  title: string;
  @Column({ nullable: true })
  description: string;
  @Column()
  location: string;
  @Column({ nullable: true })
  value: string;
  @Column('text', { array: true })
  categories: string[];
  @Column('text', { array: true })
  images: string[];
  @Column({ nullable: true })
  company: string;

  // Contact
  @Column({ nullable: true })
  contactEmail: string;
  @Column({ nullable: true })
  contactPhone: string;
  @Column({ nullable: true })
  contactWebsite: string;

  // Auth
  @Column({ nullable: true })
  hash: string;
  @Column({ nullable: true })
  password: string;

  // deleted
  @Column({ default: true })
  deleted: boolean;
  @Column({ nullable: true })
  deletedAt: string;
}
