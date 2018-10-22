import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EmployeeViewComponent} from '../components/employee-view/employee-view.component';
import {EmployeeEditComponent} from '../components/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from '../components/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from '../components/employee-delete/employee-delete.component';
import {EmployeeService} from '../services/employee.service';
import {EmployeeDetailsComponent} from '../components/employee-details/employee-details.component';


 const routes: Routes = [
  {path: '', component: EmployeeViewComponent, data: {name: 'לקוחות', atNavBar: false}},
  {path: 'view', component: EmployeeViewComponent, data: {name: 'לקוחות', atNavBar: true}},
  {path: 'edit/:id', component: EmployeeEditComponent, data: {name: 'עריכה מחדש', atNavBar: true}},
  {path: 'create', component: EmployeeCreateComponent, data: {name: 'לקוח חדש', atNavBar: true}},
  {path: 'delete/:id', component: EmployeeDeleteComponent, data: {name: 'מחיקה', atNavBar: false}},
  {path: 'details/:id', component: EmployeeDetailsComponent, data: {name: 'פרטים', atNavBar: false}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EmployeeService]

})
export class EmployeeRoutingModule {
}
