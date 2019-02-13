import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SaleOrderComponent} from './sale/component/sale-order/sale-order.component';

const routes: Routes = [
  {
    path: 'sale-order', component: SaleOrderComponent, data: ['sale order component']
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule {
}
