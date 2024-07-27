import { Injectable, Logger } from '@nestjs/common';
import { CreateWildfireDto } from './dto/create-wildfire.dto';
import { UpdateWildfireDto } from './dto/update-wildfire.dto';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WildfireService {
  private readonly logger = new Logger(WildfireService.name);
  private readonly apiKey: string;
  private readonly wildfireApiUrl: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GOOGLE_MAPS_API_KEY');
    this.wildfireApiUrl = this.configService.get<string>('WILDFIRE_API_URL');
  }

  @Cron('0 0 * * *')
  async checkWildfires() {
    try {
      const response = await fetch(
        `${this.wildfireApiUrl}?country=Portugal&key=${this.apiKey}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const wildfires = await response.json(); // Processa a resposta da API
      this.logger.log(`Found ${wildfires.length} wildfires in Portugal`);
    } catch (error) {
      this.logger.error(`Failed to fetch wildfire data: ${error.message}`);
    }
  }

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
