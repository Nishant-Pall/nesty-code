import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interace';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): string {
    this.cats.push(cat);
    return JSON.stringify(this.cats);
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => Number(cat.id) === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
