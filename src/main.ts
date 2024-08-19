import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './app.exceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter} = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AppExceptionFilter(httpAdapter))
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
