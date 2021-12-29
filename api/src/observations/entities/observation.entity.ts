import { Analysis } from 'src/analysis/entities/analysis.entity';
import { Permission } from 'src/common/enums/permission.enum';
import { Observer } from 'src/observers/entities/observer.entity';
import {
  Column,
  Entity,
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

  @Column({
    type: 'enum',
    enum: Permission,
    default: Permission.DataExplicit,
  })
  permission: Permission;

  @ManyToMany(() => Observer, (observer) => observer.observations)
  observers: Observer[];

  @ManyToMany(() => Analysis, (analysis) => analysis.observation)
  analysis: Analysis[];
}
