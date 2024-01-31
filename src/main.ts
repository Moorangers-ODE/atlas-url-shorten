import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, ValidationPipe, VersioningType } from '@nestjs/common';

const bootstrap = async (): Promise<void> => {
  const port = process.env.PORT ?? 3000;

  // Setup log level
  const logger: LogLevel[] = process.env.LOG_LEVEL
    ? (process.env.LOG_LEVEL.split(',') as LogLevel[])
    : ['debug', 'log', 'error', 'warn'];

  // Create Nest Factory
  const app = await NestFactory.create(AppModule, { logger });

  // Set Global prefix
  app.setGlobalPrefix('/api');

  // Set versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Set enableCors
  app.enableCors();

  // Validate DTO class
  app.useGlobalPipes(new ValidationPipe());
  // Start server
  await app.listen(port);
};

bootstrap();
