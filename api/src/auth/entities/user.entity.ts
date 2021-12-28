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
  address: string;

  @Column()
  phoneNumber: number;

  @Column()
  role: number;

  @Column()
  permission: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  registrationStatus: number;
}
