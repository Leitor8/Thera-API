import { IsString, IsNumber } from "class-validator";

export class UpdateProductDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsNumber()
    price: number;
    @IsNumber()
    stock: number;
    @IsString()
    category: string;
}
