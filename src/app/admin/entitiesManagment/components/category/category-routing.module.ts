import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CategoryViewComponent} from './components/category-view/category-view.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {CategoryCreateComponent} from './components/category-create/category-create.component';
import {CategoryDeleteComponent} from './components/category-delete/category-delete.component';
import {CategoryService} from '../../../../shared/services/category.service';
import {CategoryDetailsComponent} from './components/category-details/category-details.component';


 const routes: Routes = [
  {path: '', component: CategoryViewComponent, data: {name: 'לקוחות', atNavBar: false}},
  {path: 'view', component: CategoryViewComponent, data: {name: 'לקוחות', atNavBar: true}},
  {path: 'edit/:id', component: CategoryEditComponent, data: {name: 'עריכה מחדש', atNavBar: true}},
  {path: 'create', component: CategoryCreateComponent, data: {name: 'לקוח חדש', atNavBar: true}},
  {path: 'delete/:id', component: CategoryDeleteComponent, data: {name: 'מחיקה', atNavBar: false}},
  {path: 'details/:id', component: CategoryDetailsComponent, data: {name: 'פרטים', atNavBar: false}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoryService]

})
export class CategoryRoutingModule {
}
