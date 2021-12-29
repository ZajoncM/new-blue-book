import { IsEnum, IsString, ValidateNested } from 'class-validator';
import { Analysis } from 'src/analysis/entities/analysis.entity';
import { Permission } from 'src/common/enums/permission.enum';
import { Observer } from 'src/observers/entities/observer.entity';

export class CreateObservationDto {
  @IsString()
  observationDate: string;

  @IsString()
  coordinates: string;

  @IsString()
  description: string;

  @IsString()
  observationMaterialDirectory: string;

  @IsEnum(Permission)
  permission: Permission;

  @ValidateNested()
  observers: Observer[];

  @ValidateNested()
  analysis: Analysis[];
}
