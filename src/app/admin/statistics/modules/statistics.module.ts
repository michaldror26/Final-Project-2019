import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import {StaticticsComponent} from '../components/statictics.component';
import {SaleProductsComponent} from '../components/sale-products/sale-products.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule
  ],
  declarations: [StaticticsComponent, SaleProductsComponent],
})
export class StatisticsModule { }
