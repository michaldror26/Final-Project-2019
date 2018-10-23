import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from '../../employee/components/employee/employee.component';
import {ProviderComponent} from '../../provider/components/provider/provider.component';
import {ProductComponent} from '../../product/components/product/product.component';
import {CustomerComponent} from '../../customer/components/customer/customer.component';


const routes: Routes = [
  {
    path: 'customers', component: CustomerComponent, data: ['לקוחות'],
    loadChildren: '../../customer/modules/customer.module#CustomerModule'
  },
  {
    path: 'providers', component: ProviderComponent, data: ['ספקים'],
    loadChildren: '../../provider/modules/provider.module#ProviderModule'
  },
  {
    path: 'employees', component: EmployeeComponent, data: ['עובדים'],
    loadChildren: '../../employee/modules/employee.module#EmployeeModule'
  },
  {
    path: 'products', component: ProductComponent, data: ['מוצרים'],
    loadChildren: '../../product/modules/product.module#ProductModule'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityManagmentRoutingModule {
}
