import { Controller, Get, Post, Put, Delete, HttpException, Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { ApiTags } from "@nestjs/swagger";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("products")
@ApiTags("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    try {
      return await this.productService.findAll();
    }
    catch (error) {
      console.error("Error fetching products:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Get(":id")
  async findOne(id: string): Promise<Product> {
    try {
      if (isNaN(parseInt(id)) || parseInt(id) <= 0) {
        throw new HttpException("Invalid ID", 400);
      }
      return await this.productService.findOne(parseInt(id));
    }
    catch (error) {
      console.error("Error fetching product:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productService.create(createProductDto);
    }
    catch (error) {
      console.error("Error creating product:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Put()
  async update(@Body() updateProductDto): Promise<Product> {: UpdateProductDto
    try {
      return await this.productService.update(updateProductDto);
    }
    catch (error) {
      console.error("Error updating product:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Delete(":id")
  async delete(id: string): Promise<Product> {
    try {
      if (isNaN(parseInt(id)) || parseInt(id) <= 0) {
        throw new HttpException("Invalid ID", 400);
      }
      return await this.productService.delete(parseInt(id));
    }
    catch (error) {
      console.error("Error deleting product:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
}