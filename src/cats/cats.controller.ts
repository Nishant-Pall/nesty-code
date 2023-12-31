import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interace';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { ZodValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from '../guard/auth.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.catsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
