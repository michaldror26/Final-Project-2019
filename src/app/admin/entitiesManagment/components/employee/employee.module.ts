import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {EmployeeComponent} from './components/employee.component';
import {EmployeeViewComponent} from './components/employee-view/employee-view.component';
import {EmployeeEditComponent} from './components/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './components/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './components/employee-delete/employee-delete.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {EmployeeRoutingModule} from './employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule

  ],
  declarations: [
    EmployeeComponent,
    EmployeeViewComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeDetailsComponent]
})
export class EmployeeModule { }
