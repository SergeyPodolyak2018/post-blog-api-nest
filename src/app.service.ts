import { Injectable } from '@nestjs/common';
import { HelthDto } from './models/helth.model';

@Injectable()
export class AppService {
  getHelth(): HelthDto {
    return { status: true };
  }
}
