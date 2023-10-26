import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interace';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return JSON.stringify(this.cats);
  }

  findOne(id: string): Cat {
    return this.cats.find((cat) => cat?.id === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
