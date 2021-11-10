import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    console.log('craeteCatDto: ', createCatDto);
    return 'This action adds a new cat';
  }

  @Get('promise')
  promise(@Query() request: Request): Promise<string> {
    console.log('request: ', request);
    return new Promise((resolve) =>
      setTimeout(() => resolve('wait 3 second'), 3000),
    );
  }

  @Get()
  findAll(@Query() request: Request): Promise<string> {
    console.log('request: ', request);
    return new Promise((resolve) => setTimeout(() => resolve('promise'), 3000));
  }
}
