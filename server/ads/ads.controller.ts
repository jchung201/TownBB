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
import { ConfigService } from '@nestjs/config';

@Controller('api/v1/ads')
export class AdsController {
  constructor(
    private adsService: AdsService,
    private configService: ConfigService,
  ) {}

  @Get()
  getAds(@Query(ValidationPipe) filterDTO: AdsGetDTO): Promise<Ad[]> {
    return this.adsService.getAds(filterDTO);
  }

  @Get('/categories')
  async getAdCategories(): Promise<string[]> {
    return this.adsService.getAdCategories();
  }

  @Get('/:id')
  getAdById(@Param('id', ParseIntPipe) id: number): Promise<Ad> {
    return this.adsService.getAdById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createAd(@Body() createAdDTO: AdPostDTO): Promise<Ad> {
    return this.adsService.createAd(createAdDTO);
  }

  @Patch('/:id')
  updateAd(
    @Param('id', ParseIntPipe) id: number,
    @Query('hash') hash: string,
    @Body() updateAdDTO: AdPatchDTO,
  ): Promise<Ad> {
    return this.adsService.updateAd(id, hash, updateAdDTO);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  deleteAd(
    @Param('id', ParseIntPipe) id: number,
    @Query('hash') hash: string,
  ): Promise<Ad> {
    return this.adsService.deleteAd(id, hash);
  }
}
