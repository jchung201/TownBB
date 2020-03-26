import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SubPostDTO } from './dtos/subPost.dto';
import { SubRepository } from './models/sub.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Sub } from './models/sub.entity';
import { SubDeleteDTO } from './dtos/subDelete.dto';

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
      deleted: true,
    });
    if (foundSub) {
      foundSub.deleted = false;
      const updatedSub = await foundSub.save();
      return updatedSub;
    }
    return this.subRepository.createSub(createSubDTO);
  }

  async deleteSub(id: number, subDeleteDTO: SubDeleteDTO): Promise<Sub> {
    const { hash } = subDeleteDTO;
    const foundSub = await this.subRepository.findOne({ id, hash });
    if (!foundSub)
      throw new UnauthorizedException('Inccorect sub credentials!');
    foundSub.deleted = true;
    foundSub.deletedAt = new Date();
    const deletedSub = await foundSub.save();
    return deletedSub;
  }
}
