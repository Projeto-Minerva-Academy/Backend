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
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Produto')
@Controller('/produtos')
@ApiBearerAuth()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK) // Http Status 200
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK) // Http Status 200
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK) // Http Status 200
  findByTipo(@Param('tipo') tipo: string): Promise<Produto[]> {
    return this.produtoService.findByTipo(tipo);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED) // Http Status 201
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @HttpCode(HttpStatus.OK) // Http Status 200
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT) // Http Status 204
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
