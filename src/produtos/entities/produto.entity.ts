import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categorias.entity';


@Entity({ name: 'tb_produtos' })

export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    descricao: string;

    @IsNotEmpty()
    @Column('decimal', { precision: 6, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Column('int', { nullable: false })
    duracao: number;

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    foto: string;

    @ManyToOne(() => Categoria, categoria => categoria.produto,{
        onDelete: 'CASCADE'
    })

    categoria: Categoria;
}