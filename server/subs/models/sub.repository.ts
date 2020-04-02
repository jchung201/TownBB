import { Repository, EntityRepository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Sub } from './sub.entity';
import { SubPostDTO } from '../dtos/subPost.dto';

@EntityRepository(Sub)
export class SubRepository extends Repository<Sub> {
  private logger = new Logger('Sub Repository');

  async createSub(createSubDTO: SubPostDTO): Promise<Sub> {
    const { category, email } = createSubDTO;
    const sub = new Sub();
    sub.category = category;
    sub.email = email;
    sub.hash = uuidv4();
    await sub.save();
    delete sub.hash;
    return sub;
  }
}
