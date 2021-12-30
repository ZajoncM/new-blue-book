import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { UpdateObserverDto } from './dto/update-observer.dto';
import { ObserversService } from './observers.service';

@Controller('observers')
export class ObserversController {
  constructor(private readonly observersService: ObserversService) {}
  @Get()
  findAll() {
    return this.observersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.observersService.findOne(id);
  }
  @Patch(':id')
  @Roles(Role.AdminData)
  update(
    @Param('id') id: number,
    @Body() updateObserverDto: UpdateObserverDto,
  ) {
    return this.observersService.update(id, updateObserverDto);
  }
  @Delete(':id')
  @Roles(Role.AdminData)
  remove(@Param('id') id: number) {
    return this.observersService.remove(id);
  }
}
