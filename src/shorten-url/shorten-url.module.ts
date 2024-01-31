import { Module } from '@nestjs/common';
import { ShortenUrlService } from './shorten-url.service';

@Module({
  providers: [ShortenUrlService]
})
export class ShortenUrlModule {}
