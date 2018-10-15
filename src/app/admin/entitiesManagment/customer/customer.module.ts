import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerDeleteComponent} from "./customer-delete/customer-delete.component";
import {CustomerViewComponent} from "./customer-view/customer-view.component";
import {CustomerComponent} from "./customer.component";

import {CustomerRoutingModule} from "./customer-routing.module";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {CustomerService} from "./customer.service";



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  declarations: [
    CustomerComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerDetailsComponent
  ],
  providers:[CustomerService]
})
export class CustomerModule { }
