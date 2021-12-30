import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { ObservationsService } from './observations.service';

@Controller('observations')
export class ObservationsController {
  constructor(private readonly observationsService: ObservationsService) {}
  @Get()
  findAll(@Request() req) {
    return this.observationsService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Request() req) {
    return this.observationsService.findOne(id, req.user);
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
    @Body() updateObservationDto: UpdateObservationDto,
  ) {
    return this.observationsService.update(id, updateObservationDto);
  }

  @Delete(':id')
  @Roles(Role.AdminData)
  remove(@Param('id') id: number, @Request() req) {
    return this.observationsService.remove(id, req.user);
  }
}
