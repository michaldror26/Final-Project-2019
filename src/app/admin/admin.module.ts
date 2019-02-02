import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {EntitiesManagmentModule} from './entitiesManagment/entities-managment.module';
import { PurchaseModule } from './purchase/purchase.module';
import {SaleModule} from './sale/sale.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EntitiesManagmentModule,
    PurchaseModule,
    SaleModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
