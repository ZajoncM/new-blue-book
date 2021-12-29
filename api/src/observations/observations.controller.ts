import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { UpdateObserverDto } from 'src/observers/dto/update-observer.dto';
import { CreateObservationDto } from './dto/create-observation.dto';
import { ObservationsService } from './observations.service';

@Controller('observations')
export class ObservationsController {
  constructor(private readonly observationsService: ObservationsService) {}
  @Get()
  findAll() {
    return this.observationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.observationsService.findOne(id);
  }

  @Post()
  @Roles(Role.AdminData)
  create(@Body() createObservationDto: CreateObservationDto) {
    return this.observationsService.create(createObservationDto);
  }

  @Patch(':id')
  @Roles(Role.AdminData)
  update(
    @Param('id') id: number,
    @Body() updateObserverDto: UpdateObserverDto,
  ) {
    return this.observationsService.update(id, updateObserverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.observationsService.remove(id);
  }
}
