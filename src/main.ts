import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Initialize the data source before creating the Nest application
  AppModule;
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
