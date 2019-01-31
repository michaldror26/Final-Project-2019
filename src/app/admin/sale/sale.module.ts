import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleRoutingModule} from './sale-routing.module';
import { TempComponent } from './sale/component/temp/temp.component';
import { SaleComponent } from './sale/component/sale.component';

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
  ],
  declarations: [TempComponent, SaleComponent]
})
export class SaleModule {
}
