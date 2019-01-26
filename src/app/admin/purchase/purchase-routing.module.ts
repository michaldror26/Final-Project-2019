<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SortEtrogsComponent } from './components/sort-etrogs/sort-etrogs.component';

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
=======
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
>>>>>>> 3e414644bb9cc468301f2c473745b8f8cb0ac38f
