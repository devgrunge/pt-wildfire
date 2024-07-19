import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WildfireModule } from './wildfire/wildfire.module';

@Module({
  imports: [WildfireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
