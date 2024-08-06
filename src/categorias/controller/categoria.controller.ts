import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria')
@UseGuards(JwtAuthGuard)
@Controller('/categorias')
@ApiBearerAuth()
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK) // Http Status 200
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK) // Http Status 200
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK) // Http Status 200
  findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED) // Http Status 201
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK) // Http Status 200
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT) // Http Status 204
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}
