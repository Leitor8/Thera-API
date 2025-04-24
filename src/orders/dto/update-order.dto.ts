import { IsString, IsArray, IsNumber } from "class-validator";

export class UpdateOrderDto {
    @IsNumber()
    id: number;
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