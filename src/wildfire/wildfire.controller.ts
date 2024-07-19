import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WildfireService } from './wildfire.service';
import { CreateWildfireDto } from './dto/create-wildfire.dto';
import { UpdateWildfireDto } from './dto/update-wildfire.dto';

@Controller('wildfire')
export class WildfireController {
  constructor(private readonly wildfireService: WildfireService) {}

  @Post()
  create(@Body() createWildfireDto: CreateWildfireDto) {
    return this.wildfireService.create(createWildfireDto);
  }

  @Get()
  findAll() {
    return this.wildfireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wildfireService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWildfireDto: UpdateWildfireDto) {
    return this.wildfireService.update(+id, updateWildfireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wildfireService.remove(+id);
  }
}
