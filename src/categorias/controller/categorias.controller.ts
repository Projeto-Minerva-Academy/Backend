import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categorias.service";
import { Categoria } from "../entities/categorias.entity";

@Controller("/categorias")
export class CategoriaController{

    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK) // Http Status 200
    findAll(): Promise<Categoria[]>{
        return this.categoriaService.findAll();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK) // Http Status 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria>{
        return this.categoriaService.findById(id);
    }

    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK) // Http Status 200
    findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]>{
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
    delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id);
    }

}
