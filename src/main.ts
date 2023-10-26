import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger/logger.middleware';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);
  // global usage of logger
  // app.use(logger)
  // global filter
  // app.useGlobalFilters(new HttpExceptionFilter())
}
bootstrap();
