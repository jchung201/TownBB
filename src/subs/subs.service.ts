import { Injectable } from '@nestjs/common';
import { SubPostDTO } from './dtos/subPost.dto';
import { SubRepository } from './models/sub.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Sub } from './models/sub.entity';

@Injectable()
export class SubsService {
  constructor(
    @InjectRepository(SubRepository)
    private adRepository: SubRepository,
  ) {}

  async createSub(createSubDTO: SubPostDTO): Promise<Sub> {
    return this.adRepository.createSub(createSubDTO);
  }
}
