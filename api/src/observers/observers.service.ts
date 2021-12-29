import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObserverDto } from './dto/create-observer.dto';
import { Observer } from './entities/observer.entity';

@Injectable()
export class ObserversService {
  constructor(
    @InjectRepository(Observer)
    private readonly observerRepository: Repository<Observer>,
  ) {}

  create(createObserverDto: CreateObserverDto) {
    return this.observerRepository.create(createObserverDto);
  }

  findAll() {
    return this.observerRepository.find();
  }

  findOne(id: number) {
    const observer = this.observerRepository.findOne(id);

    if (!observer) {
      throw new HttpException(`Observer ${id} not found`, 404);
    }

    return observer;
  }
}
