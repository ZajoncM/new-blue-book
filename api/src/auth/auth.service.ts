import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: Partial<User>) {
    const payload = user;
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
