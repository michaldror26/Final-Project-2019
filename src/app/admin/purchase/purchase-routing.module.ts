import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SortEtrogsComponent} from './components/sort-etrogs/sort-etrogs.component';

const routes: Routes = [
  {
    path: 'sort-etrogs', component: SortEtrogsComponent, data: ['מיון אתרוגים']
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
