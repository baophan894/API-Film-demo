import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';

@Module({
  imports: [HttpModule],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
