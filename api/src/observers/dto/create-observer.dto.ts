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
  nick?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  photoUrl?: string;

  @IsString()
  description: string;
}
