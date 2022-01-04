import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer';
import { HttpException } from '@nestjs/common';

@Processor('email-job')
export class EmailConsumer {
  constructor(private mailerService: MailerService) {}

  @Process('email-queue')
  async test(job: Job) {
    const { user } = job.data;

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
