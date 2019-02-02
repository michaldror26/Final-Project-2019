import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CustomerViewComponent} from './components/customer-view/customer-view.component';
import {CustomerEditComponent} from './components/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './components/customer-delete/customer-delete.component';
import {CustomerService} from '../../../../shared/services/customer.service';
import {CustomerCardComponent} from './components/customer-card/customer-card.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'view'},
  {path: 'view', component: CustomerViewComponent, data: {name: 'לקוחות'}},
  {path: 'addoredit/:id', component: CustomerEditComponent, data: {name: 'עריכה מחדש'}},
  {path: 'addoredit', component: CustomerEditComponent, data: {name: 'עריכה מחדש'}},
  {path: 'delete/:id', component: CustomerDeleteComponent, data: {name: 'מחיקה'}},
  {path: 'details/:id', component: CustomerCardComponent, data: {name: 'פרטים' }},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CustomerService]

})
export class CustomerRoutingModule {
}
