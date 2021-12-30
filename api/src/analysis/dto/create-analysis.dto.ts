import { IsEnum, IsPositive, IsString } from 'class-validator';
import { Classification } from 'src/common/enums/classification.enum';
import { Interpretation } from 'src/common/enums/interpretation.enum';

export class CreateAnalysisDto {
  @IsPositive()
  observationId: number;

  @IsString()
  description: string;

  @IsString()
  conclusions: string;

  @IsEnum(Classification)
  classification: Classification;

  @IsEnum(Interpretation)
  interpretation: Interpretation;
}
