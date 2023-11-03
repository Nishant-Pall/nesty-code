import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './app.config.service';

@Module({
  imports: [
    CatsModule,
    UserModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      // .exclude({path: 'cats', method: RequestMethod.POST})
      // .forRoutes({ path: 'cats', method: RequestMethod.GET});
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
