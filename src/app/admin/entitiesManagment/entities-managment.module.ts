import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// import {FeedListComponent} from '../../shared/feeds/feeds-list/feeds-list.component';
// import {AdDirective} from '../../shared/feeds/directives/ad.directive';

import {UserComponent} from './user/user.component';

import {EmployeeComponent} from './employee/employee.component';
import {CategoryComponent} from './category/category.component';
import {ProviderComponent} from './provider/provider.component';

import {CategoryViewComponent} from './category/category-view/category-view.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './employee/employee-delete/employee-delete.component';
import {ProviderViewComponent} from './provider/provider-view/provider-view.component';
import {ProviderEditComponent} from './provider/provider-edit/provider-edit.component';
import {ProviderDeleteComponent} from './provider/provider-delete/provider-delete.component';
import {ProviderCreateComponent} from './provider/provider-create/provider-create.component';

import {EntitiesManagmentComponent} from './entities-managment.component';
import {EntityManagmentRoutingModule} from './entity-managment-routing.module';
import {CustomerModule} from './customer/modules/customer.module';
import { ProductModule } from './product/modules/product.module';

@NgModule({
  imports: [
    CommonModule,
    EntityManagmentRoutingModule,
    CustomerModule,
    ProductModule
  ],
  declarations: [
   // AdDirective,
  //  FeedListComponent,
    UserComponent,
    EmployeeComponent,
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
    ProviderViewComponent,
    ProviderEditComponent,
    ProviderDeleteComponent,
    ProviderCreateComponent,
    EntitiesManagmentComponent
  ],
  exports: []
})
export class EntitiesManagmentModule {
}
