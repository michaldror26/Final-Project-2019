import { NgModule} from '@angular/core';
//  import { NgModule,CUSTOM_ELEMENTS_SCHEM } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticsRoutingModule } from './statistics-routing.module';
import {StaticticsComponent} from '../components/statictics.component';
import {SaleProductsComponent} from '../components/sale-products/sale-products.component';

@NgModule({
  imports: [
    CommonModule,
    NgxGraphModule,
    NgxChartsModule,
    // BrowserAnimationsModule,
    StatisticsRoutingModule
  ],
  declarations: [StaticticsComponent, SaleProductsComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatisticsModule { }
