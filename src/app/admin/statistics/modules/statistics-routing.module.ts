import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeriodicSalesDashboardComponent} from '../components/periodic-sales-dashboard/periodic-sales-dashboard.component'
import { AnnualSalesDashboardComponent } from '../components/annual-sales-dashboard/annual-sales-dashboard.component';

const routes: Routes = [
  {
      path: 'periodic-sales-dashboard', component:PeriodicSalesDashboardComponent , data: ['דשבורד מכירות תקופתי']
    },
    {
      path: 'annual-sales-dashboard', component:AnnualSalesDashboardComponent , data: ['דשבורד מכירות שנתי']
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
