import { Controller, Get,Param } from '@nestjs/common';
import { PlanetasService } from '../planetas/planetas.service';

@Controller('planetas')
export class PlanetasController {
constructor(private readonly planetasService: PlanetasService) {
}

@Get()
getPlanetas() {
    return this.planetasService.getPlanetas();
}

}
