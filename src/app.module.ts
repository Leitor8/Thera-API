import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './orders/order.module';
import { ProductModule } from './products/product.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [OrderModule, ProductModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
