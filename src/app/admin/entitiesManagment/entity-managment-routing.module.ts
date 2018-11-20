import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './components/customer/components/customer.component';
import {ProviderComponent} from './components/provider/components/provider.component';
import {EmployeeComponent} from './components/employee/components/employee.component';
import {ProductComponent} from './components/product/components/product.component';


const routes: Routes = [
  {
    path: 'customers', component: CustomerComponent, data: ['לקוחות'],
    loadChildren: './components/customer/customer.module#CustomerModule'
  },
  {
    path: 'providers', component: ProviderComponent, data: ['ספקים'],
    loadChildren: './components/provider/provider.module#ProviderModule'
  },
  {
    path: 'employees', component: EmployeeComponent, data: ['עובדים'],
    loadChildren: './components/employee/employee.module#EmployeeModule'
  },
  {
    path: 'products', component: ProductComponent, data: ['מוצרים'],
    loadChildren: './components/product/product.module#ProductModule'
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
