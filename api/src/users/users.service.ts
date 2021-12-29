import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { RegistrationStatus } from 'src/common/enums/registration-status.enum';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({
      registrationStatus: RegistrationStatus.Registered,
    });
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({ ...updateUserDto, email });

    if (!user) {
      throw new HttpException(`User not found`, 404);
    }

    return this.userRepository.save(user);
  }

  async remove(username: string) {
    const user = await this.findOne(username);

    return this.userRepository.remove(user);
  }

  async findOne(username: string) {
    const user = await this.userRepository.findOne({
      username,
    });

    if (!user) {
      throw new HttpException(`User not found`, 404);
    }

    if (user.registrationStatus === RegistrationStatus.Requested) {
      throw new HttpException(`User not accepted`, 404);
    }

    return user;
  }
}
