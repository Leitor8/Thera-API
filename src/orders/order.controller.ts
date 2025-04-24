import {Controller, Get, Post, Put, Delete} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("orders")
@ApiTags("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
  @Get(":id")
  async findOne(id: string): Promise<Order> {
    return this.orderService.findOne(parseInt(id));
  }
  @Post()
  async create(): Promise<Order> {
    return this.orderService.create();
  }
  @Put()
  async update(): Promise<Order> {
    return this.orderService.update();
  }
  @Delete()
  async delete(): Promise<Order> {
    return this.orderService.delete();
  }

}