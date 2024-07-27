import { Module } from '@nestjs/common';
import { WildfireService } from './wildfire.service';
import { WildfireController } from './wildfire.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [WildfireController],
  providers: [WildfireService],
})
export class WildfireModule {}
