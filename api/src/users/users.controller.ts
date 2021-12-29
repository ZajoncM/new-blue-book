import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.AdminSystem)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  @Roles(Role.AdminSystem)
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Patch(':email')
  @Roles(Role.AdminSystem)
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @Delete(':username')
  @Roles(Role.AdminSystem)
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
