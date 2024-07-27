// create-wildfire.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWildfireDto {
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsOptional()
  description?: string;
}
