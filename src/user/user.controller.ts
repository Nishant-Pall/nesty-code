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
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../guard/auth.guard';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { User } from './interfaces/user.interface';

@Controller('user')
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User) {
    return this.userService.create(user);
  }
}
