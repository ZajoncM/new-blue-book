import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RequestsModule } from './requests/requests.module';
import appConfig from './config/app.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    RequestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
