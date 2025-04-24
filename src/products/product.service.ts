import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductRepository) private productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOneById(id);
  }
  async create(product: Product): Promise<any> {
    return this.productRepository.createProduct(product);
  }
  async update(product: Product): Promise<any> {
    return this.productRepository.updateProduct(product);
  }
  async delete(id: number): Promise<any> {
    return this.productRepository.deleteProduct(id);
  }
}