import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";
import { CategoriaModule } from "../categorias/categorias.module";
import { CategoriaService } from "../categorias/services/categorias.service";
import { ProdutoController } from "./controller/produtos.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule { }
