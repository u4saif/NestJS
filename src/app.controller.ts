import { Controller, Get } from '@nestjs/common';
import { AppService, data } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): data {
    return this.appService.getHello();
  }
}
