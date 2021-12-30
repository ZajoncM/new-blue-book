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

  @Get(':email/:observation')
  findOne(
    @Param('email') email: string,
    @Param('observation') observation: number,
  ) {
    return this.analysisService.findOne(email, observation);
  }

  @Post()
  @Roles(Role.Analyst, Role.AdminData)
  create(@Body() createAnalysisDto: CreateAnalysisDto, @Request() req) {
    return this.analysisService.create(createAnalysisDto, req.user);
  }

  @Patch(':username/:observation')
  @Roles(Role.Analyst, Role.AdminData)
  update(
    @Param('username') username: string,
    @Param('observation') observation: number,
    @Body() updateAnalysisDto: UpdateAnalysisDto,
    @Request() req,
  ) {
    return this.analysisService.update(
      updateAnalysisDto,
      username,
      observation,
      req.user,
    );
  }

  @Delete(':email/:observation')
  @Roles(Role.Analyst, Role.AdminData)
  remove(
    @Param('email') email: string,
    @Param('observation') observation: number,
    @Request() req,
  ) {
    return this.analysisService.remove(email, observation, req.user);
  }
}
