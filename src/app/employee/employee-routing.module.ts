import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule {
}
