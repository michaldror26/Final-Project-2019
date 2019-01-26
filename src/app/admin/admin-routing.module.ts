import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {EntitiesManagmentComponent} from './entitiesManagment/components/entities-managment.component';
import {PurchaseComponent} from './purchase/components/purchase.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard]
    children: [
      // //{path: '/**', data: ['צפייה במלאי'], children: []},
      {
        path: 'entities-managment', component: PurchaseComponent, data: ['בסיס נתונים'],
        loadChildren: './entitiesManagment/entities-managment.module#EntitiesManagmentModule'
      },
      {
        path: 'sale', component: PurchaseComponent, data: ['מכירה'],
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
        path: 'purchase', component: EntitiesManagmentComponent, data: ['קניה'],
        loadChildren: './purchase/purchase.module#SaleModule'
      },
      // {
      //   path: '/', data: ['דוחות'], children: [
      //   {path: '1', data: ['בסיסי נתונים']},
      //   {path: '2', data: ['קניה']},
      //   {path: '3', data: ['מכירה']}
      // ]
      // },
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
