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
  ) {}

  async create(createObservationDto: CreateObservationDto) {
    const observers =
      createObservationDto.observers &&
      (await Promise.all(
        createObservationDto.observers.map((observer) =>
          this.observersService.create(observer),
        ),
      ));

    const observation = this.observationRepository.create({
      ...createObservationDto,
      observers,
    });

    return this.observationRepository.save(observation);
  }

  findAll() {
    return this.observationRepository.find();
  }

  async findOne(id: number) {
    const observation = await this.observationRepository.findOne(id);

    if (!observation) {
      throw new HttpException(`Observation ${id} not found`, 404);
    }

    return observation;
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
    const observation = await this.findOne(id);

    return this.observationRepository.remove(observation);
  }
}
