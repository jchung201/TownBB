import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubsService } from './subs.service';
import { SubPostDTO } from './dtos/subPost.dto';
import { Sub } from './models/sub.entity';
import { SubDeleteDTO } from './dtos/subDelete.dto';

@Controller('ads')
export class SubsController {
  constructor(private subsService: SubsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createSub(@Body() createSubDTO: SubPostDTO): Promise<Sub> {
    return this.subsService.createSub(createSubDTO);
  }

  @Delete('/:id')
  deleteAd(
    @Param('id', ParseIntPipe) id: number,
    @Body() subDeleteDTO: SubDeleteDTO,
  ): Promise<Sub> {
    return this.subsService.deleteSub(id, subDeleteDTO);
  }
}
