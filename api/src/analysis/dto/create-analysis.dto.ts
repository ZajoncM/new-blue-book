import { IsEnum, IsString, ValidateNested } from 'class-validator';
import { Classification } from 'src/common/enums/classification.enum';
import { Interpretation } from 'src/common/enums/interpretation.enum';
import { Observation } from 'src/observations/entities/observation.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateAnalysisDto {
  @ValidateNested()
  analyst: User;

  @ValidateNested()
  observation: Observation;

  @IsString()
  description: string;

  @IsString()
  conclusions: string;

  @IsEnum(Classification)
  classification: Classification;

  @IsEnum(Interpretation)
  interpretation: Interpretation;
}
