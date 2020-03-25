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
import { CreateAdDTO } from './dtos/create-ad.dto';
import { GetAdsFilterDTO } from './dtos/get-ads-filter.dto';
import { AdEnumsValidationPipe } from './pipes/ad-enums-validation.pipe';
import { Ad } from './models/ad.entity';
import { AdCategory } from './models/ad-category.enum';

@Controller('ads')
export class AdsController {
  constructor(private adsService: AdsService) {}

  @Get()
  getAds(@Query(ValidationPipe) filterDTO: GetAdsFilterDTO): Promise<Ad[]> {
    return this.adsService.getAds(filterDTO);
  }

  @Get('/:id')
  getAdById(@Param('id', ParseIntPipe) id: number): Promise<Ad> {
    return this.adsService.getAdById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAd(@Body() createAdDTO: CreateAdDTO): Promise<Ad> {
    return this.adsService.createAd(createAdDTO);
  }

  @Delete('/:id')
  deleteAd(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.adsService.deleteAd(id);
  }

  @Patch('/:id')
  updateAd(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('category', AdEnumsValidationPipe) category: AdCategory,
  ): Promise<Ad> {
    return this.adsService.updateAd(id, title, category);
  }
}
