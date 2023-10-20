import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interace';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return JSON.stringify(this.cats);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
