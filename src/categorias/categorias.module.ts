import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categorias.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class CategoriaModule {}