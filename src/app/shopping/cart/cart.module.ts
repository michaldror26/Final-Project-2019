import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {SaleOrderService} from '../../shared/services/saleOrder.service';
import {OrderService} from '../../shared/services/order.service';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule
  ],
  declarations: [CartComponent
  ],
  providers: [
    DataService,
    CartService,
    SaleOrderService,
    OrderService
  ],
  exports: []
})
export class CartModule {
}
