import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseComponent } from './components/purchase.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { SortEtrogsComponent } from './components/sort-etrogs/sort-etrogs.component';
import {InventoryService} from '../services/inventory.service';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import {ShippingProductsModule} from 'src/app/shopping/products/shipping-products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    PurchaseRoutingModule,
    ShippingProductsModule
  ],
  declarations: [PurchaseComponent, SortEtrogsComponent, PurchaseOrderComponent ],
  providers: [InventoryService]
})
export class PurchaseModule { }
