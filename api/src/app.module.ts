import { Global, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RequestsModule } from './requests/requests.module';
import { ObserversModule } from './observers/observers.module';
import { ObservationsModule } from './observations/observations.module';
import { AnalysisModule } from './analysis/analysis.module';
import appConfig from './config/app.config';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';
import { JwtStrategy } from './common/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { MailModule } from './mail/mail.module';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    UsersModule,
    PassportModule,
    AuthModule,
    RequestsModule,
    ObserversModule,
    ObservationsModule,
    AnalysisModule,
    MailModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
