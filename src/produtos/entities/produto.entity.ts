import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 6, scale: 2, nullable: false })
  @ApiProperty()
  preco: number;

  @IsNotEmpty()
  @Column('int', { nullable: false })
  @ApiProperty()
  duracao: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  foto: string;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
