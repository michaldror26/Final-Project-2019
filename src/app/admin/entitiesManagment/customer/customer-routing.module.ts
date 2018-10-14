import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CustomerViewComponent} from "./customer-view/customer-view.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerDeleteComponent} from "./customer-delete/customer-delete.component";
import {CustomerService} from "./customer.service";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";


 const routes: Routes = [
  {path: '', component: CustomerViewComponent, data: {name: 'לקוחות', atNavBar: false}},
  {path: 'view', component: CustomerViewComponent, data: {name: 'לקוחות', atNavBar: true}},
  {path: 'edit/:id', component: CustomerEditComponent, data: {name: 'עריכה מחדש', atNavBar: true}},
  {path: 'create', component: CustomerCreateComponent, data: {name: 'לקוח חדש', atNavBar: true}},
  {path: 'delete/:id', component: CustomerDeleteComponent, data: {name: 'מחיקה', atNavBar: false}},
  {path: 'details/:id', component: CustomerDetailsComponent, data: {name: 'פרטים', atNavBar: false}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CustomerService]

})
export class CustomerRoutingModule {
}
