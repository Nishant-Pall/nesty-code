import { Inject, Injectable } from '@nestjs/common';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { EnvConfig } from './envConfig.interface';

@Injectable()
export class DummyService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
    const filePath = `${options.config}.env`;
    const envFile = path.resolve(__dirname, options.config, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
