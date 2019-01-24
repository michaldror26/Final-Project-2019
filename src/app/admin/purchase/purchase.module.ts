import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseComponent} from './components/purchase.component';
import {PurchaseRoutingModule} from './purchase-routing.module';
import {SortEtrogsComponent} from './components/sort-etrogs/sort-etrogs.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
  declarations: [PurchaseComponent, SortEtrogsComponent]
})
export class PurchaseModule {
}
