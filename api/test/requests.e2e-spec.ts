import { Test, TestingModule } from '@nestjs/testing';
import { HttpServer, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from 'src/app.module';
import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

describe('RequestController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<User>;

  const requestData = {
    firstName: 'Reader',
    lastName: 'Reader',
    email: 'm.zajonc@selleo.com',
    phoneNumber: 123123123,
    role: 3,
    permission: 1,
    username: 'selleo',
    password: 'qwerty',
  };

  let httpServer: HttpServer;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    repository = moduleFixture.get('UserRepository');
    const connection = repository.manager.connection;
    await connection.synchronize(true);
    await app.init();
    httpServer = app.getHttpServer();
  });

  it('/requests (POST)', () => {
    return request(httpServer)
      .post('/requests')
      .send(requestData as CreateRequestDto)
      .then(({ body }) => expect(body.email).toEqual('m.zajonc@selleo.com'));
  });

  it('/requests (GET)', () => {
    return request(app.getHttpServer())
      .get('/requests')
      .then(({ body }) => {
        expect(body.length).toBeGreaterThan(0);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
