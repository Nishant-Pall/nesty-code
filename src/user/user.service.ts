import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User): string {
    this.users.push(user);
    return JSON.stringify(this.users);
  }

  findOne(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  findAll(): User[] {
    return this.users;
  }
}
