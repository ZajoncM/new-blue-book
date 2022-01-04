import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MailService {
  constructor(@InjectQueue('email-job') private emailQueue: Queue) {}

  async sendUserConfirmation(user: User) {
    await this.emailQueue.add('email-queue', {
      user,
    });
  }
}
