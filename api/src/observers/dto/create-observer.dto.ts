import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateObserverDto {
  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  phoneNumber?: number;

  @IsString()
  @IsOptional()
  photoUrl?: string;

  @IsString()
  description: string;
}
