import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  const config = new DocumentBuilder()
    .setTitle('Minerva API - Backend')
    .setDescription('Projeto Minerva')
    .setContact(
      'Projeto Minerva',
      'https://github.com/Projeto-Minerva-Academy/Backend',
      'projetominerva01@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
