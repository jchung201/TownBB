import { Repository, EntityRepository } from 'typeorm';
import { Ad } from './ad.entity';
import { CreateAdDTO } from '../dtos/create-ad.dto';
import { AdCategory } from './ad-category.enum';
import { GetAdsFilterDTO } from '../dtos/get-ads-filter.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Ad)
export class AdRepository extends Repository<Ad> {
  private logger = new Logger('Ad Repository');

  async getAds(filterDTO: GetAdsFilterDTO): Promise<Ad[]> {
    const { category, search } = filterDTO;
    const query = this.createQueryBuilder('ad');
    if (category) query.andWhere('ad.category = :category', { category });
    if (search)
      query.andWhere(
        'ad.title LIKE :search OR ad.company LIKE :search OR ad.location LIKE :search',
        { search: `%${search}%` },
      );
    try {
      const ads = await query.getMany();
      return ads;
    } catch (error) {
      this.logger.error(
        `Failed to fetch ads. Filters: ${JSON.stringify(filterDTO)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createAd(createAdDTO: CreateAdDTO): Promise<Ad> {
    const { title, company, rate, location } = createAdDTO;
    const ad = new Ad();
    ad.title = title;
    ad.company = company;
    ad.rate = rate;
    ad.location = location;
    ad.category = AdCategory.LABOR;
    await ad.save();
    delete ad.user;
    return ad;
  }
}
