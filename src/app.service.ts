import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';

import { Hello } from './app.interface';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<Hello[]> {
    return this.httpService.axiosRef
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.data;
      });
  }
}
