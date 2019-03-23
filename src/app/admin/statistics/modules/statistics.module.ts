import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import {StaticticsComponent} from '../components/statictics.component';
import {FiltersComponent} from '../components/filters/filters.component';
import {PeriodicSalesDashboardComponent} from '../components/periodic-sales-dashboard/periodic-sales-dashboard.component';
import {AnnualSalesDashboardComponent} from '../components/annual-sales-dashboard/annual-sales-dashboard.component';
import {BIService} from '../services/BIService';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule
  ],
  declarations: [StaticticsComponent,
                 PeriodicSalesDashboardComponent,
                 AnnualSalesDashboardComponent,
                 FiltersComponent],

  providers:[BIService]
})
export class StatisticsModule { }
