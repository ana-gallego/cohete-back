import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetasController } from './planetas/planetas.controller';
import { PlanetasService } from './planetas/planetas.service';
@Module({
  imports: [],
  controllers: [AppController, PlanetasController],
  providers: [AppService,PlanetasService],
})
export class AppModule {}
