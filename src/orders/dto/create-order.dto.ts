import { IsString, IsArray, IsNumber } from "class-validator";

export class CreateOrderDto {
    @IsString()
    customerName: string;
    @IsString()
    customerEmail: string;
    @IsArray()
    productIds: number[];
    @IsNumber()
    totalAmount: number;
    @IsString()
    orderStatus: string;
}