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

@Controller('cats')
export class CatsController {
  @Get()
  findAll(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.status(HttpStatus.OK);
    return 'All cats';
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
    return `This action adds a new cat ${JSON.stringify(createCatDto)}`;
  }
}
