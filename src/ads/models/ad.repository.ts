import { Repository, EntityRepository } from 'typeorm';
import { Ad } from './ad.entity';
import { AdPostDTO } from '../dtos/adPost.dto';
import { AdsGetDTO } from '../dtos/adsGet.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Ad)
export class AdRepository extends Repository<Ad> {
  private logger = new Logger('Ad Repository');

  async getAds(filterDTO: AdsGetDTO): Promise<Ad[]> {
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

  async createAd(createAdDTO: AdPostDTO): Promise<Ad> {
    const {
      title,
      description,
      location,
      value,
      categories,
      images,
      company,
      contactEmail,
      contactPhone,
      contactWebsite,
    } = createAdDTO;
    const ad = new Ad();
    if (title) ad.title = title;
    if (description) ad.description = description;
    if (location) ad.location = location;
    if (value) ad.value = value;
    if (categories) ad.categories = categories;
    if (images) ad.images = images;
    if (company) ad.company = company;
    if (contactEmail) ad.contactEmail = contactEmail;
    if (contactPhone) ad.contactPhone = contactPhone;
    if (contactWebsite) ad.contactWebsite = contactWebsite;
    await ad.save();
    delete ad.user;
    return ad;
  }
}
