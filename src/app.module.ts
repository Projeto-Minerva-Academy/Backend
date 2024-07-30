import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categorias.entity';
import { Produto } from './produtos/entities/produto.entity';
import { Usuarios } from './usuarios/entities/usuario.entity';
import { ProdutoModule } from './produtos/produto.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '.753159Tata.',
      database: 'db_minerva',
      entities: [Categoria, Produto, Usuarios],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule,
    ProdutoModule,
    UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
