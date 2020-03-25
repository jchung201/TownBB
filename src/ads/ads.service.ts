import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AdCategory } from './models/ad-category.enum';
import { CreateAdDTO } from './dtos/create-ad.dto';
import { GetAdsFilterDTO } from './dtos/get-ads-filter.dto';
import { AdRepository } from './models/ad.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './models/ad.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(AdRepository)
    private adRepository: AdRepository,
  ) {}

  async getAdById(id: number): Promise<Ad> {
    const foundAd = await this.adRepository.findOne(id);
    if (!foundAd) throw new NotFoundException(`Ad with ID "${id}" not found!`);
    return foundAd;
  }

  async getAds(filterDTO: GetAdsFilterDTO): Promise<Ad[]> {
    return this.adRepository.getAds(filterDTO);
  }

  async createAd(createAdDTO: CreateAdDTO): Promise<Ad> {
    return this.adRepository.createAd(createAdDTO);
  }

  async deleteAd(id: number): Promise<void> {
    const ad = await this.getAdById(id);
    if (false) throw new UnauthorizedException('You do not own this Ad!');
    const result = await this.adRepository.delete({ id });
    if (result.affected === 0)
      throw new NotFoundException(`Ad with ID "${id}" not found!`);
  }

  async updateAd(id: number, title: string, category: AdCategory): Promise<Ad> {
    const ad = await this.getAdById(id);
    if (false) throw new UnauthorizedException('You do not own this Ad!');
    ad.title = title;
    ad.category = category;
    await ad.save();
    return ad;
  }
}
