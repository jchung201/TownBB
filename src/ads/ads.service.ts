import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AdPostDTO } from './dtos/adPost.dto';
import { AdsGetDTO } from './dtos/adsGet.dto';
import { AdRepository } from './models/ad.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './models/ad.entity';
import { AdPatchDTO } from './dtos/adPatch.dto';

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

  async getAds(filterDTO: AdsGetDTO): Promise<Ad[]> {
    return this.adRepository.getAds(filterDTO);
  }

  async createAd(createAdDTO: AdPostDTO): Promise<Ad> {
    return this.adRepository.createAd(createAdDTO);
  }

  async deleteAd(id: number): Promise<void> {
    const ad = await this.getAdById(id);
    if (true) throw new UnauthorizedException('You do not own this Ad!');
  }

  async updateAd(id: number, updateAdDTO: AdPatchDTO): Promise<Ad> {
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
      hash,
      password,
    } = updateAdDTO;
    const foundAd = await this.adRepository.findOne({ id, hash, password });
    if (!foundAd) throw new UnauthorizedException('Incorrect credentials!');
    if (title) foundAd.title = title;
    if (description) foundAd.description = description;
    if (location) foundAd.location = location;
    if (value) foundAd.value = value;
    if (categories) foundAd.categories = categories;
    if (images) foundAd.images = images;
    if (company) foundAd.company = company;
    if (contactEmail) foundAd.contactEmail = contactEmail;
    if (contactPhone) foundAd.contactPhone = contactPhone;
    if (contactWebsite) foundAd.contactWebsite = contactWebsite;
    const savedAd = await foundAd.save();
    return savedAd;
  }
}
