import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  registrationDate: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: number;

  @Column()
  role: number;

  @Column()
  permission: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  registrationStatus: number;
}
