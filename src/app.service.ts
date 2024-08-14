import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): data {
    const DATA = {
      message: " Server running at port 3000",
      status:200
    }
    return DATA;
  }
}

export interface data {
  message:string,
  status:number
}