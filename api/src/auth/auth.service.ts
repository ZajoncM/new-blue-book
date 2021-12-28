import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createRequest(createRequestDto: CreateRequestDto) {
    const user = this.userRepository.create({
      ...createRequestDto,
      registrationDate: Date.now().toString(),
      registrationStatus: 1,
    });

    return this.userRepository.save(user);
  }
}
