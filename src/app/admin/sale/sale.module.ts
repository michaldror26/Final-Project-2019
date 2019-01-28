import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleRoutingModule} from './sale-routing.module';
import { TempComponent } from './sale/component/temp/temp.component';

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
  ],
  declarations: [TempComponent],
  exports: [SaleRoutingModule]
})
export class SaleModule {
}
