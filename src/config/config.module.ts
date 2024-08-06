import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env',
        load: [config],
        isGlobal: true,
        // validations on env variables types and exists
        validationSchema: Joi.object({
          DATABASE_URL: Joi.string().required(),
          /* DATABASE_NAME: Joi.string().required(),
          DATABASE_PORT: Joi.number().required(),
          POSTGRES_DB: Joi.string().required(),
          POSTGRES_USER: Joi.string().required(),
          POSTGRES_PASSWORD: Joi.string().required(),
          POSTGRES_PORT: Joi.number().required(),
          POSTGRES_HOST: Joi.string().hostname().required(), */
        })
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppConfigModule {}