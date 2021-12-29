import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalysisService } from 'src/analysis/analysis.service';
import { Analysis } from 'src/analysis/entities/analysis.entity';
import { Observer } from 'src/observers/entities/observer.entity';
import { ObserversService } from 'src/observers/observers.service';
import { Observation } from './entities/observation.entity';
import { ObservationsController } from './observations.controller';
import { ObservationsService } from './observations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Observation, Analysis, Observer])],
  controllers: [ObservationsController],
  providers: [ObservationsService, AnalysisService, ObserversService],
})
export class ObservationsModule {}
