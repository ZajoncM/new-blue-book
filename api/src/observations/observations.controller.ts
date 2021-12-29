import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UpdateObserverDto } from 'src/observers/dto/update-observer.dto';
import { ObservationsService } from './observations.service';

@Controller('observations')
export class ObservationsController {
  constructor(private readonly observationsService: ObservationsService) {}
  // @Get()
  // findAll() {
  //   return this.observationsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.observationsService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() updateObserverDto: UpdateObserverDto,
  // ) {
  //   return this.observationsService.update(id, updateObserverDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.observationsService.remove(id);
  // }
}
