import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubsService } from './subs.service';
import { SubPostDTO } from './dtos/subPost.dto';
import { Sub } from './models/sub.entity';

@Controller('ads')
export class SubsController {
  constructor(private adsService: SubsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createSub(@Body() createSubDTO: SubPostDTO): Promise<Sub> {
    return this.adsService.createSub(createSubDTO);
  }
}
