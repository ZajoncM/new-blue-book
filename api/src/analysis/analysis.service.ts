import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';
import { Analysis } from './entities/analysis.entity';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(Analysis)
    private readonly analysisRepository: Repository<Analysis>,
  ) {}

  create(createAnalysisDto: CreateAnalysisDto) {
    const analysis = this.analysisRepository.create(createAnalysisDto);

    return this.analysisRepository.save(analysis);
  }

  findAll() {
    return this.analysisRepository.find();
  }

  async findOne(id: number) {
    const analysis = await this.analysisRepository.findOne(id);

    if (!analysis) {
      throw new HttpException(`analysis ${id} not found`, 404);
    }

    return analysis;
  }

  async update(updateAnalysisDto: UpdateAnalysisDto) {
    const analysis = await this.analysisRepository.preload(updateAnalysisDto);

    if (!analysis) {
      throw new HttpException(`Analysis  not found`, 404);
    }

    return this.analysisRepository.save(analysis);
  }

  async remove(id: number) {
    const analysis = await this.findOne(id);

    return this.analysisRepository.remove(analysis);
  }
}
