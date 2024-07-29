import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categorias.entity';
import { CategoriaService } from './services/categorias.service';


@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [],
  providers: [CategoriaService],
  exports: [TypeOrmModule],
})
export class CategoriaModule {}