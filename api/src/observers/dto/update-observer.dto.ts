import { CreateObserverDto } from './create-observer.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateObserverDto extends PartialType(CreateObserverDto) {}
