import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdPostDTO } from './dtos/adPost.dto';
import { AdsGetDTO } from './dtos/adsGet.dto';
import { AdRepository } from './models/ad.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './models/ad.entity';
import { AdPatchDTO } from './dtos/adPatch.dto';
import { AdDeleteDTO } from './dtos/adDelete.dto';
import { SubsService } from 'src/subs/subs.service';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(AdRepository)
    private adRepository: AdRepository,
    private readonly subsService: SubsService,
    private configService: ConfigService,
    private readonly commonService: CommonService,
  ) {}

  async getAds(filterDTO: AdsGetDTO): Promise<Ad[]> {
    return this.adRepository.getAds(filterDTO);
  }

  async getAdById(id: number): Promise<Ad> {
    const foundAd = await this.adRepository.findOne(id);
    if (!foundAd) throw new NotFoundException(`Ad with ID "${id}" not found!`);
    return foundAd;
  }

  async checkAdAccess(id: number, hash: string, password: string): Promise<Ad> {
    const foundAd = await this.adRepository.findOne({ id, hash, password });
    if (!foundAd) throw new NotFoundException(`Ad with ID "${id}" not found!`);
    return foundAd;
  }

  async createAd(createAdDTO: AdPostDTO): Promise<Ad> {
    const { location } = createAdDTO;
    const foundLocation = await this.commonService.getLocation({ location });
    createAdDTO.latitude = foundLocation.latitude;
    createAdDTO.longitude = foundLocation.longitude;
    // Create Ad
    const createdAd = await this.adRepository.createAd(createAdDTO);
    // Call Email Service
    this.commonService.emailOwner({
      to: createdAd.contactEmail,
      from: 'noreply@townbb.com',
      templateId: 'd-372939afe8db4caeb693f179ea0f33a2',
      title: createdAd.title,
      editUrl: `${this.configService.get('WEB_URL')}/${createdAd.id}?hash=${
        createdAd.hash
      }`,
    });
    // Send subs emails
    const { categories } = createAdDTO;
    this.subsService.notifySubs(categories, createdAd);
    return createdAd;
  }

  async updateAd(id: number, updateAdDTO: AdPatchDTO): Promise<Ad> {
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
      hash,
      password,
    } = updateAdDTO;
    const foundAd = await this.adRepository.findOne({ id, hash, password });
    if (!foundAd) throw new UnauthorizedException('Incorrect credentials!');
    if (title) foundAd.title = title;
    if (description) foundAd.description = description;
    if (location) foundAd.location = location;
    if (longitude && latitude) {
      foundAd.longitude = longitude;
      foundAd.latitude = latitude;
    }
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

  async deleteAd(id: number, adDeleteDTO: AdDeleteDTO): Promise<Ad> {
    const { hash, password } = adDeleteDTO;
    const foundAd = await this.adRepository.findOne({ id, hash, password });
    if (!foundAd) throw new UnauthorizedException('Incorect ad credentials!');
    foundAd.deleted = true;
    foundAd.deletedAt = new Date();
    const deletedAd = await foundAd.save();
    return deletedAd;
  }
}
