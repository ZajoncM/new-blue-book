import { Permission } from 'src/common/entities/permission.entity';
import { RegistrationStatus } from 'src/common/entities/registirationStatus.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @JoinTable()
  @OneToOne((type) => Permission, (permission) => permission.id)
  permission: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @JoinTable()
  @OneToOne((type) => RegistrationStatus, (status) => status.id)
  registrationStatus: number;
}
