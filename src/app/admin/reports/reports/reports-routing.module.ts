import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllSalesOrdersComponent} from './component/all-sales-orders/all-sales-orders.component';

const routes: Routes = [
  {
    path: 'all-sales-orders', component: AllSalesOrdersComponent, data: ['מכירות']
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
