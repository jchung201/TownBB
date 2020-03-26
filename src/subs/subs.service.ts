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

@Injectable()
export class SubsService {
  constructor(
    @InjectRepository(SubRepository)
    private subRepository: SubRepository,
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
  async notifySubs(categories: string[], id: number): Promise<void> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    for (let i = 0; i < categories.length; i++) {
      const foundSubs = await this.subRepository.find({
        category: categories[i],
      });
      for (let j = 0; j < foundSubs.length; j++) {
        const msg = {
          to: foundSubs[j].email,
          from: 'noreply@townbb.com',
          subject: `TownBB: New Posting in ${categories[i]}, hash: ${foundSubs[i].hash}, id:${id}`,
          text: 'Job Description',
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
