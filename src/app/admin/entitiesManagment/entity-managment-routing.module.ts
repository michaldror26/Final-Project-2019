import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from "./employee/employee.component";
import {ProviderComponent} from "./provider/provider.component";
import {ProductComponent} from "./product/product.component";
import {CustomerComponent} from "./customer/customer.component";


const routes: Routes = [
  {path: 'customers',component:CustomerComponent, data: ['לקוחות']},
  {path: 'providers',component:ProviderComponent, data: ['ספקים']},
  {path: 'employees',component:EmployeeComponent, data: ['עובדים']},
  {path: 'products',component:ProductComponent, data: ['מוצרים']}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityManagmentRoutingModule {
}
