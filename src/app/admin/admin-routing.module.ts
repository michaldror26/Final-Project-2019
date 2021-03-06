import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {EntitiesManagmentComponent} from './entitiesManagment/components/entities-managment.component';
import {PurchaseComponent} from './purchase/components/purchase.component';
import {SaleComponent} from './sale/sale/component/sale.component';
import {StaticticsComponent} from './statistics/components/statictics.component';
import {InventoryComponent} from './inventory/inventory.component';
import {ReportsComponent} from './reports/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard]
    children: [
      {path: 'inventory', data: ['צפייה במלאי'], loadChildren: './inventory/inventory.module#InventoryModule'},
      {
        path: 'entities-managment', component: EntitiesManagmentComponent, data: ['בסיס נתונים'],
        loadChildren: './entitiesManagment/entities-managment.module#EntitiesManagmentModule'
      },
      {
        path: 'sale', component: SaleComponent, data: ['מכירה'],
        loadChildren: './sale/sale.module#SaleModule'
      },
      // {
      //   path: '', , children: [
      //   {path: '1', data: ['הזמן ללקוח']},
      //   {path: '2', data: ['אשר אספקה']},
      //   {path: '3', data: ['החזר סחורה']},
      //   {path: '4', data: ['צפי המכירות להיום']}
      // ]
      // },
      // {path: '/', data: ['תקבול'], children: []},
      {
        path: 'purchase', component: PurchaseComponent, data: ['קניה'],
        loadChildren: './purchase/purchase.module#PurchaseModule'
      },
      {
        path: 'statistics', component: StaticticsComponent, data: ['סטטיסטיקה'],
        loadChildren: './statistics/modules/statistics.module#StatisticsModule'
      },
      {
        path: 'reports', component: ReportsComponent, data: ['דוחות'],
        loadChildren: './reports/reports/reports.module#ReportsModule'
      },
      // {
      //   path: '/**', data: ['סטטיסטיקה'], children: []
      // }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
