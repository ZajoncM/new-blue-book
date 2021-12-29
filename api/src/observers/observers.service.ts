import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObserverDto } from './dto/create-observer.dto';
import { UpdateObserverDto } from './dto/update-observer.dto';
import { Observer } from './entities/observer.entity';

@Injectable()
export class ObserversService {
  constructor(
    @InjectRepository(Observer)
    private readonly observerRepository: Repository<Observer>,
  ) {}
  create(createObserverDto: CreateObserverDto) {
    const observer = this.observerRepository.create(createObserverDto);
    return this.observerRepository.save(observer);
  }
  findAll() {
    return this.observerRepository.find();
  }
  async findOne(id: number) {
    const observer = await this.observerRepository.findOne(id);
    if (!observer) {
      throw new HttpException(`Observer ${id} not found`, 404);
    }
    return observer;
  }
  async update(id: number, updateObserverDto: UpdateObserverDto) {
    const observer = await this.observerRepository.preload({
      id,
      ...updateObserverDto,
    });
    if (!observer) {
      throw new HttpException(`Observer ${id} not found`, 404);
    }
    return this.observerRepository.save(observer);
  }
  async remove(id: number) {
    const observer = await this.findOne(id);
    return this.observerRepository.remove(observer);
  }
}
