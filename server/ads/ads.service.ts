import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdPostDTO } from './dtos/adPost.dto';
import { AdsGetDTO } from './dtos/adsGet.dto';
import { AdRepository } from './models/ad.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './models/ad.entity';
import { AdPatchDTO } from './dtos/adPatch.dto';
import { SubsService } from '../subs/subs.service';
import { CommonService } from '../common/common.service';

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
    const rawAds = await this.adRepository.getAds(filterDTO);
    return rawAds.map(ad => {
      delete ad.hash;
      return ad;
    });
  }

  async getAdCategories(): Promise<string[]> {
    return this.adRepository.getAdCategories();
  }

  async getAdById(id: number): Promise<Ad> {
    const foundAd = await this.adRepository.findOne(id);
    if (!foundAd) throw new NotFoundException(`Ad with ID "${id}" not found!`);
    return foundAd;
  }

  async createAd(createAdDTO: AdPostDTO): Promise<Ad> {
    // Create Ad
    const createdAd = await this.adRepository.createAd(createAdDTO);
    // Call Email Service
    this.commonService.emailOwner({
      to: createdAd.contactEmail,
      from: 'noreply@townbb.com',
      templateId: 'd-372939afe8db4caeb693f179ea0f33a2',
      title: createdAd.title,
      editUrl: `${this.configService.get('WEB_URL')}/ads/${
        createdAd.id
      }/edit?hash=${createdAd.hash}`,
    });
    // Send subs emails
    const { categories } = createAdDTO;
    this.subsService.notifySubs(categories, createdAd);
    return createdAd;
  }

  async updateAd(
    id: number,
    hash: string,
    updateAdDTO: AdPatchDTO,
  ): Promise<Ad> {
    const {
      title,
      description,
      location,
      latitude,
      longitude,
      value,
      categories,
      images,
      company,
      contactEmail,
      contactPhone,
      contactWebsite,
    } = updateAdDTO;
    const foundAd = await this.adRepository.findOne({ id, hash });
    if (!foundAd) throw new UnauthorizedException('Incorrect credentials!');
    if (title) foundAd.title = title;
    if (description) foundAd.description = description;
    if (location && latitude && longitude) {
      if (
        latitude < -90 ||
        latitude > 90 ||
        longitude < -180 ||
        longitude > 180
      )
        throw new BadRequestException('Incorrect location inputs!');
      foundAd.location = location;
      foundAd.latitude = latitude;
      foundAd.longitude = longitude;
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

  async deleteAd(id: number, hash: string): Promise<Ad> {
    const foundAd = await this.adRepository.findOne({ id, hash });
    if (!foundAd) throw new UnauthorizedException('Incorect ad credentials!');
    foundAd.deleted = true;
    foundAd.deletedAt = new Date();
    const deletedAd = await foundAd.save();
    return deletedAd;
  }
}
