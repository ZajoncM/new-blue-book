import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() body) {
    return body;
  }
  @Post('request')
  createRegistrationRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.authService.createRequest(createRequestDto);
  }
}
