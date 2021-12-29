import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { CreateRequestDto } from 'src/requests/dto/create-request.dto';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Public()
  @Post()
  createRegistrationRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.createRequest(createRequestDto);
  }

  @Patch(':email')
  @Roles(Role.AdminSystem)
  acceptRegistrationRequest(@Param('email') email: string) {
    return this.requestsService.acceptRegistrationRequest(email);
  }

  @Get()
  findAllRequests() {
    return this.requestsService.findAllRequests();
  }
}
