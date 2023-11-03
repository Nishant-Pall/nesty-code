import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class AppConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => {
      this.getValue(k, true);
    });
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('ENV', false);
    return mode != 'LOCAL' && mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USER'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_DATABASE'),
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      autoLoadEntities: true,
    };
  }
}

const configService = new AppConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PASSWORD',
  'DB_DATABASE',
]);

export { configService };
