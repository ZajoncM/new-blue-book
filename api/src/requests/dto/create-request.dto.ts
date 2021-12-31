import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsInt()
  phoneNumber: number;

  @IsInt()
  role: number;

  @IsInt()
  permission: number;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
