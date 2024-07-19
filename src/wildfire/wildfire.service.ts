import { Injectable } from '@nestjs/common';
import { CreateWildfireDto } from './dto/create-wildfire.dto';
import { UpdateWildfireDto } from './dto/update-wildfire.dto';

@Injectable()
export class WildfireService {
  create(createWildfireDto: CreateWildfireDto) {
    return 'This action adds a new wildfire';
  }

  findAll() {
    return `This action returns all wildfire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wildfire`;
  }

  update(id: number, updateWildfireDto: UpdateWildfireDto) {
    return `This action updates a #${id} wildfire`;
  }

  remove(id: number) {
    return `This action removes a #${id} wildfire`;
  }
}
