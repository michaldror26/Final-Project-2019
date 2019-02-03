import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {MyOrdersComponent} from './my-orders.component';
import {RouterModule} from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule
  ],
  declarations: [
    MyOrdersComponent
  ],
  providers: [
    DataService,
    CartService
  ],
  exports: []
})
export class MyOrderModule {
}
