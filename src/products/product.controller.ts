import { Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("product")
@ApiTags("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(":id")
  async findOne(id: string): Promise<Product> {
    return this.productService.findOne(id);
  }
  @Post()
  async create(): Promise<Product> {
    return this.productService.create();
  }
  @Put()
  async update(): Promise<Product> {
    return this.productService.update();
  }
  @Delete()
  async delete(): Promise<Product> {
    return this.productService.delete();
  }
}