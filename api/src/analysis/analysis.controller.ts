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
import { AnalysisService } from './analysis.service';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}
  @Get()
  findAll() {
    return this.analysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.analysisService.findOne(id);
  }

  @Post()
  @Roles(Role.Analyst, Role.AdminData)
  create(@Body() createAnalysisDto: CreateAnalysisDto) {
    return this.analysisService.create(createAnalysisDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateObserverDto: UpdateAnalysisDto,
  ) {
    return 'update analysis';
    //   return this.analysisService.update(id, updateObserverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.analysisService.remove(id);
  }
}
