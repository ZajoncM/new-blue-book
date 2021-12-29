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

  @Column()
  lastname?: string;

  @Column()
  firstname?: string;

  @Column()
  username?: string;

  @Column()
  email?: string;

  @Column()
  phoneNumber?: number;

  @Column()
  photoUrl?: string;

  @Column()
  description?: string;

  @ManyToMany(() => Observation, (observation) => observation.observers, {
    cascade: true,
  })
  @JoinTable()
  observations: Observation[];
}
