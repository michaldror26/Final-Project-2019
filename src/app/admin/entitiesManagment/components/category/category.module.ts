import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from './components/category.component';
import {CategoryViewComponent} from './components/category-view/category-view.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {CategoryCreateComponent} from './components/category-create/category-create.component';
import {CategoryDeleteComponent} from './components/category-delete/category-delete.component';
import {CategoryDetailsComponent} from './components/category-details/category-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoryComponent,
    CategoryViewComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryDetailsComponent]
})
export class CategoryModule { }
