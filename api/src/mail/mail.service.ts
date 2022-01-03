import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User) {
    await this.mailerService
      .sendMail({
        to: user.email,
        subject: 'Welcome to New Blue Book',
        template: __dirname + './register',
        context: {
          name: user.firstName,
        },
      })
      .catch((e) => {
        throw new HttpException(e.message, 500);
      });
  }
}
