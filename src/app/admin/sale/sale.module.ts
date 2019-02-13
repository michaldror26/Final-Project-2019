import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleRoutingModule} from './sale-routing.module';
import { SaleOrderComponent } from './sale/component/sale-order/sale-order.component';
import { SaleComponent } from './sale/component/sale.component';
import {ShippingProductsModule} from 'src/app/shopping/products/shipping-products.module';
@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
    ShippingProductsModule
  ],
  declarations: [ SaleComponent, SaleOrderComponent]
})
export class SaleModule {
}
