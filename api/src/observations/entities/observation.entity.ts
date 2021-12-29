import { Analysis } from 'src/analysis/entities/analysis.entity';
import { Observer } from 'src/observers/entities/observer.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Observation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  observationDate: string;

  @Column()
  coordinates: string;

  @Column()
  description: string;

  @Column()
  observationMaterialDirectory: string;

  @Column()
  permission: number;

  @ManyToMany(() => Observer, (observer) => observer.observations)
  observers: Observer[];

  @OneToMany(() => Analysis, (analysis) => analysis.observation)
  analysis: Analysis;
}
