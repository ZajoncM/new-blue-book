import { HttpException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RegistrationStatus } from 'src/common/enums/registration-status.enum';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
  find: jest.fn(),
  preload: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
});

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<MockRepository>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of registered users', async () => {
      const expectedUsers = [];

      userRepository.find.mockReturnValue(expectedUsers);
      const users = await service.findAll();
      expect(users).toEqual(expectedUsers);
    });
  });

  describe('findOne', () => {
    describe('when user with ID exists', () => {
      it('should return the user object', async () => {
        const userId = 'user.name';
        const expectedUser = {};

        userRepository.findOne.mockReturnValue(expectedUser);
        const user = await service.findOne(userId);
        expect(user).toEqual(expectedUser);
      });
    });
    describe('otherwise is not found', () => {
      it('should throw the "HttpException"', async () => {
        const userId = '1';
        userRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(userId);
        } catch (err) {
          expect(err).toBeInstanceOf(HttpException);
          expect(err.message).toEqual(`User not found`);
        }
      });
    });
    describe('otherwise is not accepted', () => {
      it('should throw the "HttpException" with not accepted notice', async () => {
        const userId = '1';
        const expectedUser = {
          registrationStatus: RegistrationStatus.Requested,
        };
        userRepository.findOne.mockReturnValue(expectedUser);

        try {
          await service.findOne(userId);
        } catch (err) {
          expect(err).toBeInstanceOf(HttpException);
          expect(err.message).toEqual(`User not accepted`);
        }
      });
    });
  });

  describe('findOneByEmail', () => {
    describe('when user with ID exists', () => {
      it('should return the user object', async () => {
        const userEmail = 'test@test.com';
        const expectedUser = {};

        userRepository.findOne.mockReturnValue(expectedUser);
        const user = await service.findOneByEmail(userEmail);
        expect(user).toEqual(expectedUser);
      });
    });
    describe('otherwise is not found', () => {
      it('should throw the "HttpException"', async () => {
        const userEmail = 'test@test.com';
        userRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOneByEmail(userEmail);
        } catch (err) {
          expect(err).toBeInstanceOf(HttpException);
          expect(err.message).toEqual(`User not found`);
        }
      });
    });
    describe('otherwise is not accepted', () => {
      it('should throw the "HttpException" with not accepted notice', async () => {
        const userEmail = 'test@test.com';
        const expectedUser = {
          registrationStatus: RegistrationStatus.Requested,
        };
        userRepository.findOne.mockReturnValue(expectedUser);

        try {
          await service.findOneByEmail(userEmail);
        } catch (err) {
          expect(err).toBeInstanceOf(HttpException);
          expect(err.message).toEqual(`User not accepted`);
        }
      });
    });
  });

  describe('update', () => {
    describe('if user exists', () => {
      it('should update and return user', async () => {
        const userEmail = 'test@test.com';
        const updateUserDto = { firstName: 'John', lastName: 'Doe' };
        const expectedUser = { ...updateUserDto };

        userRepository.preload.mockReturnValue(expectedUser);
        userRepository.save.mockReturnValue(expectedUser);
        const user = await service.update(userEmail, updateUserDto);
        expect(user).toEqual(expectedUser);
      });
    });
    describe('otherwise is not found', () => {
      it('should throw the "HttpException" with not found', async () => {
        const userEmail = 'test@test.com';
        const updateUserDto = { firstName: 'John', lastName: 'Doe' };

        userRepository.preload.mockReturnValue(undefined);

        try {
          await service.update(userEmail, updateUserDto);
        } catch (err) {
          expect(err).toBeInstanceOf(HttpException);
          expect(err.message).toEqual(`User not found`);
        }
      });
    });
  });

  describe('remove', () => {
    describe('if user exists', () => {
      it('should update and return user', async () => {
        const username = 'user';
        const expectedUser = {};

        userRepository.findOne.mockReturnValue(expectedUser);
        userRepository.remove.mockReturnValue(expectedUser);
        const user = await service.remove(username);
        expect(user).toEqual(expectedUser);
      });
    });
  });
});
