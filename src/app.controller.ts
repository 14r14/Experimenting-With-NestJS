import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Hello } from './app.interface';

@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Hello[]> {
    return await this.appService.getHello();
  }
}
