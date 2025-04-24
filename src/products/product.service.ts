import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductRepository) private productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOneById(id);
  }
  async create(product: CreateProductDto): Promise<any> {
    const newProduct = this.productRepository.create(product as Partial<Product>);
    return this.productRepository.createProduct(newProduct);
  }
  async update(product: UpdateProductDto): Promise<any> {
    const newProduct = this.productRepository.create(product as Partial<Product>);
    return this.productRepository.updateProduct(newProduct);
  }
  async delete(id: number): Promise<any> {
    return this.productRepository.deleteProduct(id);
  }
}