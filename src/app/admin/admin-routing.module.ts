import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component:  ,
    redirectTo: 'home',
    pathMatch: 'full'
    //canActivate: [AuthGuard]
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
