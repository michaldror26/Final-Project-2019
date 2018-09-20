import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerDeleteComponent} from "./customer-delete/customer-delete.component";
import {CustomerViewComponent} from "./customer-view/customer-view.component";
import {CustomerComponent} from "./customer.component";

import {CustomerRoutingModule} from "./customer-routing.module";



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent
  ]
})
export class CustomerModule { }
