import { Controller, Get } from "@nestjs/common";
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
}