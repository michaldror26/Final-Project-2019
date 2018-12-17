import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {DataService} from './data.service';
import {CartService} from './cart.service';
import {ShoppingComponent} from './shopping.component';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    OrderViewComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    ShoppingRoutingModule
  ],
  providers: [
    DataService,
    CartService
  ],
  exports: []
})
export class ShoppingModule {
}
