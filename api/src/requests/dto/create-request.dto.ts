import { IsPositive, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  address: string;

  @IsPositive()
  phoneNumber: number;

  @IsPositive()
  role: number;

  @IsPositive()
  permission: number;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
