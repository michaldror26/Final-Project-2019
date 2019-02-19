import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntityManagmentRoutingModule} from './entity-managment-routing.module';
import {CustomerModule} from './components/customer/customer.module';
import {ProductModule} from './components/product/product.module';
import {ProviderModule} from './components/provider/provider.module';
import {EmployeeModule} from './components/employee/employee.module';
import {EntitiesManagmentComponent} from './components/entities-managment.component';



@NgModule({
  imports: [
    CommonModule,
    EntityManagmentRoutingModule,
    CustomerModule,
    ProductModule,
    ProviderModule,
    EmployeeModule
  ],
  declarations: [
    EntitiesManagmentComponent
  ],
  exports: []
})
export class EntitiesManagmentModule {
}
