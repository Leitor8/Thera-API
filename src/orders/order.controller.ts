import {Controller, Get} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("order")
@ApiTags("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}