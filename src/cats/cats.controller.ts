import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interace';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findCat(
    @Req() request: Request,
    @Param() params: any,
    @Res() response: Response,
  ) {
    response.send(`cat ${params.id}`);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
