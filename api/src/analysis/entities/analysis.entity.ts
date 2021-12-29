import { Classification } from 'src/common/enums/classification.enum';
import { Interpretation } from 'src/common/enums/interpretation.enum';
import { Observation } from 'src/observations/entities/observation.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Analysis {
  @ManyToOne(() => User, (user) => user.analysis, { primary: true })
  analyst: User;

  @ManyToOne(() => Observation, (observation) => observation.analysis, {
    primary: true,
  })
  observation: Observation;

  @Column()
  description: string;

  @Column()
  conclusions: string;

  @Column({
    type: 'enum',
    enum: Classification,
    default: Classification.CloseEncounters,
  })
  classification: Classification;

  @Column({
    type: 'enum',
    enum: Interpretation,
    default: Interpretation.UFO,
  })
  interpretation: Interpretation;
}
