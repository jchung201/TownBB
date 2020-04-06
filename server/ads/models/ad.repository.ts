import { Repository, EntityRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Ad } from './ad.entity';
import { AdPostDTO } from '../dtos/adPost.dto';
import { AdsGetDTO } from '../dtos/adsGet.dto';
import {
  Logger,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';

@EntityRepository(Ad)
export class AdRepository extends Repository<Ad> {
  private logger = new Logger('Ad Repository');

  async getAds(filterDTO: AdsGetDTO): Promise<Ad[]> {
    const { category, search, latitude, longitude } = filterDTO;

    let query;
    if (latitude && longitude) {
      // Arbitrary radius... hard coded
      const radius = 300;
      query = `
      SELECT *, point(${Number(longitude)}, ${Number(
        latitude,
      )}) <@> point(longitude, latitude)::point as distance 
      FROM ad
      WHERE ad.deleted=false
      AND (point(${Number(longitude)}, ${Number(
        latitude,
      )}) <@> point(longitude, latitude)) < ${radius}
      `;
      if (search) {
        query += ` AND ad.title ILIKE '%${search}%' OR ad.description ILIKE '%${search}%' OR ad.location ILIKE '%${search}%' OR ad.value ILIKE '%${search}%' OR ad.company ILIKE '%${search}%'`;
      }
      if (category) query += ` AND '${category}'=ANY(ad.categories)`;
    } else if (search) {
      query = `SELECT * from ad WHERE ad.deleted=false AND ad.title ILIKE '%${search}%' OR ad.description ILIKE '%${search}%' OR ad.location ILIKE '%${search}%' OR ad.value ILIKE '%${search}%' OR ad.company ILIKE '%${search}%'`;
      if (category) query += ` AND '${category}'=ANY(ad.categories)`;
    } else if (category) {
      query = `SELECT * from ad WHERE ad.deleted=false`;
      query += ` OR '${category}'=ANY(ad.categories)`;
    } else {
      query = `SELECT * from ad WHERE ad.deleted=false`;
    }
    query += ' ORDER BY ad.updated DESC';

    try {
      return await this.query(query);
    } catch (error) {
      this.logger.error(
        `Failed to fetch ads. Filters: ${JSON.stringify(filterDTO)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async getAdCategories(): Promise<string[]> {
    try {
      const fetchedAds = await this.query(
        'Select DISTINCT categories from ad;',
      );
      const foundArray: string[] = [];
      fetchedAds.forEach(ad => {
        foundArray.push(...ad.categories);
      });
      return [...new Set(foundArray)];
    } catch (error) {
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
    } = createAdDTO;
    const ad = new Ad();
    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180)
      throw new BadRequestException('Incorrect location inputs!');
    ad.title = title;
    ad.description = description;
    ad.location = location;
    ad.latitude = latitude;
    ad.longitude = longitude;
    if (value) ad.value = value;
    ad.categories = categories;
    ad.images = images;
    if (company) ad.company = company;
    ad.contactEmail = contactEmail;
    if (contactPhone) ad.contactPhone = contactPhone;
    if (contactWebsite) ad.contactWebsite = contactWebsite;
    // hash ad and password
    ad.hash = uuidv4();

    await ad.save();
    return ad;
  }
}
