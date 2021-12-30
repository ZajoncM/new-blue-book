import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/common/enums/role.enum';
import { ObservationsService } from 'src/observations/observations.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';
import { Analysis } from './entities/analysis.entity';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(Analysis)
    private readonly analysisRepository: Repository<Analysis>,
    private readonly observationsService: ObservationsService,
    private readonly usersService: UsersService,
  ) {}

  async create(createAnalysisDto: CreateAnalysisDto, user: Partial<User>) {
    const observation = await this.observationsService.findOne(
      createAnalysisDto.observationId,
      user,
    );

    const analysis = this.analysisRepository.create({
      ...createAnalysisDto,
      analyst: user,
      observation,
    });

    return this.analysisRepository.save(analysis);
  }

  findAll() {
    return this.analysisRepository.find();
  }

  async findOne(email: string, observation: number) {
    const analysis = await this.analysisRepository.findOne({
      where: { analyst: { email }, observation },
    });

    if (!analysis) {
      throw new HttpException(`analysis not found`, 404);
    }

    return analysis;
  }

  async update(
    updateAnalysisDto: UpdateAnalysisDto,
    authorName: string,
    observationId: number,
    user: Partial<User>,
  ) {
    if (user.role !== Role.AdminData && authorName !== user.username) {
      throw new HttpException(`Cannot update an analysis`, 400);
    }
    const observation = await this.observationsService.findOne(
      observationId,
      user,
    );

    const author = await this.usersService.findOne(authorName);

    const { email } = author;
    const { id } = observation;

    const prevAnalysis = await this.findOne(email, id);

    return this.analysisRepository.save({
      ...prevAnalysis,
      ...updateAnalysisDto,
      analyst: { email },
      observation: { id },
    });
  }

  async remove(email: string, observationId: number, user) {
    if (user.role !== Role.AdminData && email !== user.email) {
      throw new HttpException(`Cannot delete an analysis`, 400);
    }

    const analysis = await this.findOne(email, observationId);
    this.analysisRepository.delete(analysis);
    return analysis;
  }
}
