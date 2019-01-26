import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EntitiesManagmentComponent } from './entitiesManagment/components/entities-managment.component';
import { PurchaseComponent } from './purchase/components/purchase.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard]
    children: [
      // //{path: '/**', data: ['צפייה במלאי'], children: []},
      {
        path: 'purchase', component: PurchaseComponent, data: ['קניה'],
        loadChildren: './entitiesManagment/entities-managment.module#EntitiesManagmentModule'
      },
      // {
      //   path: '', data: ['מכירה'], children: [
      //   {path: '1', data: ['הזמן ללקוח']},
      //   {path: '2', data: ['אשר אספקה']},
      //   {path: '3', data: ['החזר סחורה']},
      //   {path: '4', data: ['צפי המכירות להיום']}
      // ]
      // },
      // {path: '/', data: ['תקבול'], children: []},
      {
        path: 'entities-managment', component: EntitiesManagmentComponent, data: ['בסיס נתונים'],
        loadChildren: './purchase/purchase.module#PurchaseModule'
      }
      ,
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
