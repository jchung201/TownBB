import { Repository, EntityRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Ad } from './ad.entity';
import { AdPostDTO } from '../dtos/adPost.dto';
import { AdsGetDTO } from '../dtos/adsGet.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Ad)
export class AdRepository extends Repository<Ad> {
  private logger = new Logger('Ad Repository');

  async getAds(filterDTO: AdsGetDTO): Promise<Ad[]> {
    const { categories, search } = filterDTO;
    const query = this.createQueryBuilder('ad');
    if (categories) {
      categories.forEach(category =>
        query.andWhere(':category=ANY(categories)', { category }),
      );
    }
    if (search)
      query.andWhere(
        'ad.title ILIKE :search OR ad.description ILIKE :search OR ad.location ILIKE :search OR ad.value ILIKE :search OR ad.company ILIKE :search OR ad.contactEmail ILIKE :search OR ad.contactPhone ILIKE :search OR ad.contactWebsite ILIKE :search',
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
      longitude,
      latitude,
      value,
      categories,
      images,
      company,
      contactEmail,
      contactPhone,
      contactWebsite,
      password,
    } = createAdDTO;
    const ad = new Ad();
    if (title) ad.title = title;
    if (description) ad.description = description;
    if (location) ad.location = location;
    if (latitude && longitude) {
      ad.latitude = latitude;
      ad.longitude = longitude;
    }
    if (value) ad.value = value;
    if (categories) ad.categories = categories;
    if (images) ad.images = images;
    if (company) ad.company = company;
    if (contactEmail) ad.contactEmail = contactEmail;
    if (contactPhone) ad.contactPhone = contactPhone;
    if (contactWebsite) ad.contactWebsite = contactWebsite;
    // hash ad and password
    ad.hash = uuidv4();
    // email hash to email
    ad.password = password;

    await ad.save();
    delete ad.password;
    return ad;
  }
}
