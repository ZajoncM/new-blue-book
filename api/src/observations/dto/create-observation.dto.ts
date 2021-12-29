import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Permission } from 'src/common/enums/permission.enum';
import { CreateObserverDto } from 'src/observers/dto/create-observer.dto';
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

  @ValidateNested({ each: true })
  @Type(() => CreateObserverDto)
  observers: CreateObserverDto[];
}
