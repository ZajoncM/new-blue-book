import { Observation } from 'src/observations/entities/observation.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Observer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: number;

  @Column({ nullable: true })
  photoUrl: string;

  @Column()
  description: string;

  @ManyToMany(() => Observation, (observation) => observation.observers)
  observations: Observation[];
}
