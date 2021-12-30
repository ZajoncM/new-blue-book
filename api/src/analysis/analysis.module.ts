import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observation } from 'src/observations/entities/observation.entity';
import { ObservationsService } from 'src/observations/observations.service';
import { Observer } from 'src/observers/entities/observer.entity';
import { ObserversService } from 'src/observers/observers.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { Analysis } from './entities/analysis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Analysis, Observation, Observer, User])],
  controllers: [AnalysisController],
  providers: [
    AnalysisService,
    ObservationsService,
    ObserversService,
    UsersService,
  ],
})
export class AnalysisModule {}
