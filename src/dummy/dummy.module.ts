import { DynamicModule, Module } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Module({})
export class DummyModule {
  static register(config: Record<string, any>): DynamicModule {
    return {
      module: DummyModule,
      imports: [],
      exports: [DummyService],
      providers: [
        { provide: 'CONFIG_OPTIONS', useValue: config },
        DummyService,
      ],
    };
  }
}
