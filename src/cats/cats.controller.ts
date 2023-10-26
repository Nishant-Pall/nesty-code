import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interace';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    try {
      return this.catsService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
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
    try {
      return this.catsService.create(createCatDto);
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
