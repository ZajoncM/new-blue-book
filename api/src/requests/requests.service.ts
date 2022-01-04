import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { User } from 'src/users/entities/user.entity';
import { RegistrationStatus } from 'src/common/enums/registration-status.enum';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly mailService: MailService,
  ) {}

  async createRequest(createRequestDto: CreateRequestDto) {
    const isExistingUser = await this.userRepository.findOne({
      where: [
        { username: createRequestDto.username },
        { email: createRequestDto.email },
      ],
    });

    if (isExistingUser) {
      throw new HttpException(`User is Exist`, 404);
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createRequestDto.password, salt);

    const user = this.userRepository.create({
      ...createRequestDto,
      password: hash,
      registrationDate: Date.now().toString(),
      registrationStatus: RegistrationStatus.Requested,
    });

    await this.mailService.sendUserConfirmation(user);

    return this.userRepository.save(user);
  }

  async acceptRegistrationRequest(email: string) {
    const user = await this.userRepository.preload({
      email,
      registrationStatus: RegistrationStatus.Registered,
    });

    if (!user) {
      throw new HttpException(`User #${email} not found`, 404);
    }

    return this.userRepository.save(user);
  }

  findAllRequests() {
    return this.userRepository.find({
      registrationStatus: RegistrationStatus.Requested,
    });
  }
}
