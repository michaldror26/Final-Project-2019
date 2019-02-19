import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';
import {AllSalesOrdersComponent} from './component/all-sales-orders/all-sales-orders.component';
// import {OrderViewComponent} from '../../../shopping/order-view/order-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsRoutingModule,
    // OrderViewComponent
  ],
  declarations: [
    ReportsComponent,
    AllSalesOrdersComponent
  ],
  providers: [],
  exports: []
})
export class ReportsModule {
}
