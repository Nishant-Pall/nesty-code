import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DummyModule } from '../dummy/dummy.module';

@Module({
  // just a dummy module to practice dynamic modules
  imports: [DummyModule.register({ config: 'DUMMY_CONFIG_PATH' })],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
