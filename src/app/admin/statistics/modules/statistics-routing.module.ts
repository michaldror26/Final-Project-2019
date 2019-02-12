import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaleProductsComponent} from '../components/sale-products/sale-products.component'

const routes: Routes = [
  {
      path: 'sale-products', component:SaleProductsComponent , data: ['מכירת מוצרים']
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
