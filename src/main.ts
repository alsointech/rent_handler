import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const swaggerDescription = '\
    PT Backend Challenge is a task to build a comprehensive API using Nest.js and Node.js for managing clients, CDs, and rentals.\n\
    \u2022\tabstract: consider this document as the manual or the reference card related to functional software development of the API, endpoints, and required functionalities\n\
    \u2022\tarch: this project implements clean architecture which makes it easy to scale by adding new features with separated modules\n\
    \u2022\tif you want to try this from your local machine, you can consume the following resources:\n\
    \u2022\tcode base: you can find it in the GitHub Repository, please visit: [https://github.com/alsointech/rent_handler]\n\
    '

    const config = new DocumentBuilder()

    .setTitle('API')

    .setDescription(swaggerDescription)

    .setVersion('1.0')

    .build()
    
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document)
  
  await app.listen(process.env.PORT || 3000)
}
bootstrap();
