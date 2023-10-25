import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      // .exclude({path: 'cats', method: RequestMethod.POST})
      // .forRoutes({ path: 'cats', method: RequestMethod.GET});
      .apply(logger)
      .forRoutes(CatsController);
  }
}
