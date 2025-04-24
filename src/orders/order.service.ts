import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.entity";

@Injectable()
export class OrderService {
  constructor(@InjectRepository(OrderRepository) private orderRepository: OrderRepository) {}
  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
  async findOne(id: number): Promise<any> {
    return this.orderRepository.findOneById(id);
}
  async create(): Promise<any> {
    return {};
  }
  async update(): Promise<any> {
    return {};
  }
  async delete(): Promise<any> {
    return {};
  }
}