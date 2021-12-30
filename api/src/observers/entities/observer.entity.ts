import { Observation } from 'src/observations/entities/observation.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Observer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  nick: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column()
  description: string;

  @ManyToMany(() => Observation, (observation) => observation.observers)
  observations: Observation[];
}
