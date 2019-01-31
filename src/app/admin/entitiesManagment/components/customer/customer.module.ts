import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CustomerCreateComponent} from './components/customer-create/customer-create.component';
import {CustomerEditComponent} from './components/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './components/customer-delete/customer-delete.component';
import {CustomerViewComponent} from './components/customer-view/customer-view.component';
import {CustomerComponent} from './components/customer.component';

import {CustomerRoutingModule} from './customer-routing.module';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import {CustomerService} from '../../../../shared/services/customer.service';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    CustomerComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerDetailsComponent,
    CustomerCardComponent
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
