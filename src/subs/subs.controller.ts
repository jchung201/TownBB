import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { SubsService } from './subs.service';
import { SubPostDTO } from './dtos/subPost.dto';
import { Sub } from './models/sub.entity';

@Controller('subs')
export class SubsController {
  constructor(private subsService: SubsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createSub(@Body() createSubDTO: SubPostDTO): Promise<Sub> {
    // TODO: Send email with change hash
    return this.subsService.createSub(createSubDTO);
  }

  @Delete('/:id')
  deleteAd(
    @Param('id', ParseIntPipe) id: number,
    @Body('hash') hash: string,
  ): Promise<Sub> {
    return this.subsService.deleteSub(id, hash);
  }
}
