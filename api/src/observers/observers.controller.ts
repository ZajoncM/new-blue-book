import { Controller, Get } from '@nestjs/common';
import { ObserversService } from './observers.service';

@Controller('observers')
export class ObserversController {
  constructor(private readonly observersService: ObserversService) {}
  @Get()
  findAll() {
    return this.observersService.findAll();
  }
}
