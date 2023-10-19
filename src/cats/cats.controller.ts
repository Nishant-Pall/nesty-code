import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request, @Res() response: Response) {
    response.send('All cats');
  }
}
