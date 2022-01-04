import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observation } from 'src/observations/entities/observation.entity';
import { ObservationsModule } from 'src/observations/observations.module';
import { ObservationsService } from 'src/observations/observations.service';
import { Observer } from 'src/observers/entities/observer.entity';
import { ObserversModule } from 'src/observers/observers.module';
import { ObserversService } from 'src/observers/observers.service';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { Analysis } from './entities/analysis.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Analysis]),
    UsersModule,
    ObserversModule,
    ObservationsModule,
  ],
  controllers: [AnalysisController],
  providers: [AnalysisService],
})
export class AnalysisModule {}
