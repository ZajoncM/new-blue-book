import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
