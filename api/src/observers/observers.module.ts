import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observer } from './entities/observer.entity';
import { ObserversController } from './observers.controller';
import { ObserversService } from './observers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Observer])],
  controllers: [ObserversController],
  providers: [ObserversService],
  exports: [ObserversService],
})
export class ObserversModule {}
