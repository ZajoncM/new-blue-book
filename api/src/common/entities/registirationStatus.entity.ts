import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegistrationStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
