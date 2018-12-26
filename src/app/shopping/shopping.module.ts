import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {DataService} from './data.service';
import {CartService} from './cart.service';
import {ShoppingComponent} from './shopping.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { ShippingProductsModule } from './products/shipping-products.module';
import { CartModule } from './cart/cart.module';
import { MyOrderModule } from './my-orders/my-orders.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShoppingComponent,
    OrderViewComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    ShoppingRoutingModule,
    MyOrderModule,
    ShippingProductsModule,
    CartModule,
    CommonModule
  ],
  providers: [
    DataService,
    CartService
  ],
  exports: []
})
export class ShoppingModule {
}
