import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderRepository extends Repository<Order> {
  async findAll(): Promise<Order[]> {
    return this.find();
  }

  async findOneById(id: number): Promise<Order> {
    const order = await this.findOne({ where: { id } });
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    return order;
  }

  async createOrder(order: Order): Promise<Order> {
    return this.save(order);
  }

  async updateOrder(order: Order): Promise<any> {
    return this.save(order);
  }

  async deleteOrder(id: number): Promise<any> {
    return this.delete(id);
  }
}