import { IsInt, IsString } from 'class-validator';

export class CreateObserverDto {
  @IsString()
  lastname?: string;

  @IsString()
  firstname?: string;

  @IsString()
  username?: string;

  @IsString()
  email?: string;

  @IsInt()
  phoneNumber?: number;

  @IsString()
  photoUrl?: string;

  @IsString()
  description?: string;
}
