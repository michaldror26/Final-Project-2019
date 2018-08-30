import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {FeedListComponent} from '../../shared/feed/feed-list/feed-list.component';
import {AdDirective} from '../../shared/feed/directives/ad.directive';

import {UserComponent} from './user/user.component';

import {EmployeeComponent} from './employee/employee.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {ProviderComponent} from './provider/provider.component';
import {CustomerComponent} from './customer/customer.component';

import {CategoryViewComponent} from './category/category-view/category-view.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './employee/employee-delete/employee-delete.component';
import {ProductViewComponent} from './product/product-view/product-view.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProviderViewComponent} from './provider/provider-view/provider-view.component';
import {ProviderEditComponent} from './provider/provider-edit/provider-edit.component';
import {ProviderDeleteComponent} from './provider/provider-delete/provider-delete.component';
import {ProviderCreateComponent} from './provider/provider-create/provider-create.component';

import {CustomerViewComponent} from './customer/customer-view/customer-view.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';

import {EntitiesManagmentComponent} from './entities-managment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdDirective,
    FeedListComponent,
    UserComponent,
    EmployeeComponent,
    ProductComponent,
    CategoryComponent,
    ProviderComponent,
    CategoryViewComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryCreateComponent,
    EmployeeViewComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProviderViewComponent,
    ProviderEditComponent,
    ProviderDeleteComponent,
    ProviderCreateComponent,
    CustomerComponent,
    CustomerViewComponent,
    CustomerDeleteComponent,
    CustomerEditComponent,
    CustomerCreateComponent
  ],
  exports: [EntitiesManagmentComponent]
})
export class EntitiesManagmentModule {
}
