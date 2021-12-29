import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateUserDto extends PartialType(CreateRequestDto) {}
