import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { Product } from '../products/product.entity';


export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalAmount:number;

    @Column({ type: 'varchar', length: 10 })
    status:string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Product, (product) => product.id)
    products: Product[];

}