import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  email: string;

  @Column()
  address: string;
}