import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return 'find all users';
  }

  @Patch('request/:id')
  acceptRegistrationRequest(@Param('id') id: number) {
    return this.usersService.acceptRegistrationRequest(id);
  }
}
