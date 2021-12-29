import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
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
  update(
    @Param('id') id: number,
    @Body() updateObserverDto: UpdateObserverDto,
  ) {
    return this.observersService.update(id, updateObserverDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.observersService.remove(id);
  }
}
