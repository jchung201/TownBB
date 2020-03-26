import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
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
