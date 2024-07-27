import { IsString, IsOptional } from 'class-validator';

export class UpdateWildfireDto {
  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
