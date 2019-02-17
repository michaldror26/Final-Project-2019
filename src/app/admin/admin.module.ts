import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {EntitiesManagmentModule} from './entitiesManagment/entities-managment.module';
import { PurchaseModule } from './purchase/purchase.module';
import {SaleModule} from './sale/sale.module';
import { StatisticsModule } from './statistics/modules/statistics.module';
import {InventoryModule} from './inventory/inventory.module';
// import { AddresseeBarComponent } from './shared/addressee-bar/addressee-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EntitiesManagmentModule,
    PurchaseModule,
    SaleModule,
    InventoryModule,
    StatisticsModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
