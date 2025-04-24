import {Controller, Get, Post, Put, Delete, HttpException} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("orders")
@ApiTags("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    try {
      return await this.orderService.findAll();
    }
    catch (error) {
      console.error("Error fetching orders:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Get(":id")
  async findOne(id: string): Promise<Order> {
    try {
      if (isNaN(parseInt(id)) || parseInt(id) <= 0) {
        throw new HttpException("Invalid ID", 400);
      }
      return await this.orderService.findOne(parseInt(id));
    }
    catch (error) {
      console.error("Error fetching order:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Post()
  async create(): Promise<Order> {
    try {
      return await this.orderService.create();
    }
    catch (error) {
      console.error("Error creating order:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Put()
  async update(): Promise<Order> {
    try {
      return await this.orderService.update();
    }
    catch (error) {
      console.error("Error updating order:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Delete()
  async delete(id: string): Promise<Order> {
    try {
      if (isNaN(parseInt(id)) || parseInt(id) <= 0) {
        throw new HttpException("Invalid ID", 400);
      }
      return await this.orderService.delete(parseInt(id));
    }
    catch (error) {
      console.error("Error deleting order:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }

}