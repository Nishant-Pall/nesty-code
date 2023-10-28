import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);
  // global usage of logger
  // app.use(logger)
  // global filter
  // app.useGlobalFilters(new HttpExceptionFilter())
  // app.useGlobalFilters(new AllExceptionsFilter())
}
bootstrap();
