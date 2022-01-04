import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const { username, password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async getToken(reqUser: Partial<User>) {
    const user = await this.usersService.findOneByEmail(reqUser.email);

    const { username, password, ...rest } = user;
    return {
      token: this.jwtService.sign(rest),
    };
  }

  async getProfile(reqUser: Partial<User>) {
    const user = await this.usersService.findOneByEmail(reqUser.email);

    const { username, password, ...rest } = user;
    return rest;
  }

  async login(user: Partial<User>) {
    const payload = user;
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
