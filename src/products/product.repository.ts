import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductRepository extends Repository<Product> {
  async findAll(): Promise<Product[]> {
    return [];
  }

  async findOneById(id: number): Promise<Product> {
    const product = await this.findOne({ where: { id } });
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  async createProduct(product: Product): Promise<Product> {
    return this.save(product); 
  }

  async updateProduct(product: Product): Promise<any> {
    return this.save(product);
  }

  async deleteProduct(id: number): Promise<any> {
    return this.delete(id);
  }
}