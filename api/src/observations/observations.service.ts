import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnalysisService } from 'src/analysis/analysis.service';
import { ObserversService } from 'src/observers/observers.service';
import { Repository } from 'typeorm';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { Observation } from './entities/observation.entity';

@Injectable()
export class ObservationsService {
  constructor(
    @InjectRepository(Observation)
    private readonly observationRepository: Repository<Observation>,
    private readonly observersService: ObserversService,
    private readonly analysisService: AnalysisService,
  ) {}

  async create(createObservationDto: CreateObservationDto) {
    const observers =
      createObservationDto.observers &&
      (await Promise.all(
        createObservationDto.observers.map((observer) =>
          this.observersService.create(observer),
        ),
      ));

    const analysis =
      createObservationDto.analysis &&
      (await Promise.all(
        createObservationDto.analysis.map((analysis) =>
          this.analysisService.create(analysis),
        ),
      ));

    const observation = this.observationRepository.create({
      ...createObservationDto,
      observers,
      analysis,
    });

    return this.observationRepository.save(observation);
  }

  findAll() {
    return this.observationRepository.find();
  }

  async findOne(id: number) {
    const observer = await this.observationRepository.findOne(id);

    if (!observer) {
      throw new HttpException(`Observer ${id} not found`, 404);
    }

    return observer;
  }

  async update(id: number, updateObservation: UpdateObservationDto) {
    const observation = await this.observationRepository.preload({
      id,
      ...updateObservation,
    });

    if (!observation) {
      throw new HttpException(`Observation ${id} not found`, 404);
    }

    return this.observationRepository.save(observation);
  }

  async remove(id: number) {
    const observer = await this.findOne(id);

    return this.observationRepository.remove(observer);
  }
}
