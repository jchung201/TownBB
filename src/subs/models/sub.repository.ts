import { Repository, EntityRepository } from 'typeorm';
import { Sub } from './sub.entity';
import { SubPostDTO } from '../dtos/subPost.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Sub)
export class SubRepository extends Repository<Sub> {
  private logger = new Logger('Sub Repository');

  async createSub(createSubDTO: SubPostDTO): Promise<Sub> {
    const { category, email, deleted } = createSubDTO;
    const sub = new Sub();
    sub.category = category;
    sub.email = email;
    sub.deleted = deleted || false;
    await sub.save();
    return sub;
  }
}
