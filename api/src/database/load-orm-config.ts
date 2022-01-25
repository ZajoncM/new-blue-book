import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/database/database.config';

export async function loadOrmConfig(
  databaseConfig: ConfigType<typeof DatabaseConfig>,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    host: databaseConfig.host,
    port: databaseConfig.port,
    username: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.database,
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
  };
}
