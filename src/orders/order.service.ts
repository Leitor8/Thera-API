import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrderService {
  constructor(@InjectRepository(OrderRepository) private orderRepository: OrderRepository) {}
  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
  async findOne(id: number): Promise<any> {
    return this.orderRepository.findOneById(id);
}
  async create(order: CreateOrderDto): Promise<any> {
    const newOrder = this.orderRepository.create(order as Partial<Order>);
    return this.orderRepository.create(newOrder);
  }
  async update(order: UpdateOrderDto): Promise<any> {
    const newOrder = this.orderRepository.create(order as Partial<Order>);
    return this.orderRepository.updateOrder(newOrder);
  }
  async delete(id: number): Promise<any> {
    return this.orderRepository.deleteOrder(id);
  }
}