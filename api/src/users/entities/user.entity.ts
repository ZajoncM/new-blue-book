import { Analysis } from 'src/analysis/entities/analysis.entity';
import { Permission } from 'src/common/enums/permission.enum';
import { RegistrationStatus } from 'src/common/enums/registration-status.enum';
import { Role } from 'src/common/enums/role.enum';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  registrationDate: string;

  @Column()
  phoneNumber: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Reader,
  })
  role: Role;

  @Column({
    type: 'enum',
    enum: Permission,
    default: Permission.DataExplicit,
  })
  permission: Permission;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: RegistrationStatus,
    default: RegistrationStatus.Requested,
  })
  registrationStatus: RegistrationStatus;

  @OneToMany(() => Analysis, (analysis) => analysis.analyst)
  analysis: Analysis[];
}
