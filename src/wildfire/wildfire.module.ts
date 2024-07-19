import { Module } from '@nestjs/common';
import { WildfireService } from './wildfire.service';
import { WildfireController } from './wildfire.controller';

@Module({
  controllers: [WildfireController],
  providers: [WildfireService],
})
export class WildfireModule {}
