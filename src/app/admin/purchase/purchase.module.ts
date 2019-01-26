import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseComponent } from './components/purchase.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { SortEtrogsComponent } from './components/sort-etrogs/sort-etrogs.component';
import {InventoryService} from '../services/inventory.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    PurchaseRoutingModule
  ],
  declarations: [PurchaseComponent,SortEtrogsComponent ],
  providers: [InventoryService]
})
export class PurchaseModule { }
