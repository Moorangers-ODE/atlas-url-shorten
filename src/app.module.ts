import { Module } from '@nestjs/common';
import { ShortenUrlModule } from './shorten-url/shorten-url.module';
import { DataAccessLayerModule } from './data-access-layer/data-access-layer.module';

@Module({
  imports: [ShortenUrlModule, DataAccessLayerModule],
})
export class AppModule {}
