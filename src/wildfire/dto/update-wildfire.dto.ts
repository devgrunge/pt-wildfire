import { PartialType } from '@nestjs/mapped-types';
import { CreateWildfireDto } from './create-wildfire.dto';

export class UpdateWildfireDto extends PartialType(CreateWildfireDto) {}
