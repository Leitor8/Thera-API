import {Controller, Get, Post, Put, Delete, HttpException, Body} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { ApiTags } from "@nestjs/swagger";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

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
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      return await this.orderService.create(createOrderDto);
    }
    catch (error) {
      console.error("Error creating order:", error);
      throw new HttpException("Internal Server Error", 500);
    }
  }
  @Put()
  async update(@Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
    try {
      return await this.orderService.update(updateOrderDto);
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