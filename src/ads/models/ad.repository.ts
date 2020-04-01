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
    const { categories, search, latitude, longitude } = filterDTO;
    let query;
    if (typeof categories === 'string')
      throw new BadRequestException('Categories must be an array of strings!');
    if (latitude && longitude) {
      // Arbitrary radius... hard coded
      const radius = 300;
      query = `
      SELECT *, point(${longitude}, ${latitude}) <@> point(longitude, latitude)::point as distance 
      FROM ad
      WHERE ad.deleted=false
      AND (point(${longitude}, ${latitude}) <@> point(longitude, latitude)) < ${radius}
      `;
      if (search) {
        query += ` AND ad.title ILIKE '%${search}%' OR ad.description ILIKE '%${search}%' OR ad.location ILIKE '%${search}%' OR ad.value ILIKE '%${search}%' OR ad.company ILIKE '%${search}%'`;
      }
      if (categories) {
        for (let i = 0; i < categories.length; i++) {
          if (i === 0) {
            query += ` AND '${categories[i]}'=ANY(ad.categories)`;
          } else {
            query += ` OR '${categories[i]}'=ANY(ad.categories)`;
          }
        }
      }
      query += ' ORDER BY distance';
    } else if (search) {
      query = `SELECT * from ad WHERE ad.deleted=false AND ad.title ILIKE '%${search}%' OR ad.description ILIKE '%${search}%' OR ad.location ILIKE '%${search}%' OR ad.value ILIKE '%${search}%' OR ad.company ILIKE '%${search}%'`;
      if (categories) {
        for (let i = 0; i < categories.length; i++) {
          if (i === 0) {
            query += ` AND '${categories[i]}'=ANY(ad.categories)`;
          } else {
            query += ` OR '${categories[i]}'=ANY(ad.categories)`;
          }
        }
      }
    } else if (categories) {
      query = `SELECT * from ad WHERE ad.deleted=false`;
      for (let i = 0; i < categories.length; i++) {
        query += ` OR '${categories[i]}'=ANY(ad.categories)`;
      }
    } else {
      query = `SELECT * from ad WHERE ad.deleted=false`;
    }

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
        'Select DISTINCT Categories from ad;',
      );
      const foundArray = [];
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
    if (title) ad.title = title;
    if (description) ad.description = description;

    if (location) ad.location = location;
    // check if latitude and logitude is within bounds
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

    await ad.save();
    delete ad.hash;
    return ad;
  }
}
