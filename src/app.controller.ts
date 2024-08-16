import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelthDto } from './models/helth.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helth')
  getHello(): HelthDto {
    return this.appService.getHelth();
  }
}
