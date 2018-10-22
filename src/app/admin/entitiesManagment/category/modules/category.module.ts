import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from '../../category/components/category/category.component';
import {CategoryViewComponent} from '../../category/components/category-view/category-view.component';
import {CategoryEditComponent} from '../../category/components/category-edit/category-edit.component';
import {CategoryCreateComponent} from '../../category/components/category-create/category-create.component';
import {CategoryDeleteComponent} from '../../category/components/category-delete/category-delete.component';
import {CategoryDetailsComponent} from '../../category/components/category-details/category-details.component';

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
