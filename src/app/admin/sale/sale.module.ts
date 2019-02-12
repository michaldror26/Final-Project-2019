import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleRoutingModule} from './sale-routing.module';
import { TempComponent } from './sale/component/temp/temp.component';
import { SaleComponent } from './sale/component/sale.component';
import {ShippingProductsModule} from 'src/app/shopping/products/shipping-products.module';
import { AddresseeBarComponent } from '../shared/addressee-bar/addressee-bar.component';
@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
    ShippingProductsModule
  ],
  declarations: [TempComponent, SaleComponent, AddresseeBarComponent]
})
export class SaleModule {
}
