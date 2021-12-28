import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { User } from 'src/auth/entities/user.entity';
import { RegistrationStatus } from 'src/common/enums/registration-status.enum';
import { Repository } from 'typeorm';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createRequest(createRequestDto: CreateRequestDto) {
    const isExistingUser = await this.userRepository.findOne({
      username: createRequestDto.username,
    });

    if (isExistingUser) {
      throw new HttpException(`User is Exist`, 404);
    }

    const user = this.userRepository.create({
      ...createRequestDto,
      registrationDate: Date.now().toString(),
      registrationStatus: RegistrationStatus.Requested,
    });

    return this.userRepository.save(user);
  }

  async acceptRegistrationRequest(id: number) {
    const user = await this.userRepository.preload({
      id,
      registrationStatus: RegistrationStatus.Registered,
    });

    if (!user) {
      throw new HttpException(`User #${id} not found`, 404);
    }

    return this.userRepository.save(user);
  }
}
