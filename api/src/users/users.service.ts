import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async acceptRegistrationRequest(id: number) {
    const user = await this.userRepository.preload({
      id,
      registrationStatus: 2,
    });

    if (!user) {
      throw new HttpException(`User #${id} not found`, 404);
    }

    return this.userRepository.save(user);
  }
}
