import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdPostDTO } from './dtos/adPost.dto';
import { AdsGetDTO } from './dtos/adsGet.dto';
import { Ad } from './models/ad.entity';
import { AdPatchDTO } from './dtos/adPatch.dto';

@Controller('ads')
export class AdsController {
  constructor(private adsService: AdsService) {}

  @Get()
  getAds(@Query(ValidationPipe) filterDTO: AdsGetDTO): Promise<Ad[]> {
    return this.adsService.getAds(filterDTO);
  }

  @Get('/:id')
  getAdById(@Param('id', ParseIntPipe) id: number): Promise<Ad> {
    return this.adsService.getAdById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAd(@Body() createAdDTO: AdPostDTO): Promise<Ad> {
    return this.adsService.createAd(createAdDTO);
  }

  @Delete('/:id')
  deleteAd(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.adsService.deleteAd(id);
  }

  @Patch('/:id')
  updateAd(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdDTO: AdPatchDTO,
  ): Promise<Ad> {
    return this.adsService.updateAd(id, updateAdDTO);
  }
}
