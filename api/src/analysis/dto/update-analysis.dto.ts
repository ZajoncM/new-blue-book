import { CreateAnalysisDto } from './create-analysis.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAnalysisDto extends PartialType(CreateAnalysisDto) {}
