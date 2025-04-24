import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductRepository } from "./product.repository";

export class ProductService {
  async findAll(): Promise<any[]> {
    return [];
  }
  async findOne(id: number): Promise<any> {
    return {};
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