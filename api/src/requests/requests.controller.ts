import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  createRegistrationRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.createRequest(createRequestDto);
  }

  @Patch(':id')
  acceptRegistrationRequest(@Param('id') id: number) {
    return this.requestsService.acceptRegistrationRequest(id);
  }
}
