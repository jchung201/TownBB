import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { SubPostDTO } from './dtos/subPost.dto';
import { SubRepository } from './models/sub.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Sub } from './models/sub.entity';
import { Ad } from 'src/ads/models/ad.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SubsService {
  constructor(
    @InjectRepository(SubRepository)
    private subRepository: SubRepository,
    private configService: ConfigService,
  ) {}

  async createSub(createSubDTO: SubPostDTO): Promise<Sub> {
    const { category, email } = createSubDTO;
    const foundSub = await this.subRepository.findOne({
      category,
      email,
    });
    if (foundSub) {
      if (foundSub.deleted) {
        foundSub.deleted = false;
        const updatedSub = await foundSub.save();
        return updatedSub;
      } else {
        throw new ConflictException('Sub already exists');
      }
    }
    return this.subRepository.createSub(createSubDTO);
  }
  async notifySubs(categories: string[], createdAd: Ad): Promise<void> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    for (let i = 0; i < categories.length; i++) {
      // Find all subs for each category
      const foundSubs = await this.subRepository.find({
        category: categories[i],
      });
      for (let j = 0; j < foundSubs.length; j++) {
        const msg = {
          to: createdAd.contactEmail,
          from: 'noreply@townbb.com',
          templateId: 'd-b12a36f355e2431392f5e2b129b62ee2',
          // eslint-disable-next-line @typescript-eslint/camelcase
          dynamic_template_data: {
            title: createdAd.title,
            viewUrl: `${this.configService.get('WEB_URL')}/ads/${createdAd.id}`,
            unsubUrl: `${this.configService.get('WEB_URL')}/subs/${
              createdAd.id
            }?hash=${foundSubs[j].hash}`,
            category: categories[i],
          },
        };
        sgMail.send(msg);
      }
    }
  }

  async deleteSub(id: number, hash: string): Promise<Sub> {
    const foundSub = await this.subRepository.findOne({ id, hash });
    if (!foundSub)
      throw new UnauthorizedException('Inccorect sub credentials!');
    foundSub.deleted = true;
    foundSub.deletedAt = new Date();
    const deletedSub = await foundSub.save();
    return deletedSub;
  }
}
