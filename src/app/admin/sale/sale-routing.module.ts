import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TempComponent} from './sale/component/temp/temp.component';

const routes: Routes = [
  {
    path: 'temp', component: TempComponent, data: ['temp component']
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule {
}
