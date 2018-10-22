import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// import {FeedListComponent} from '../../shared/feeds/feeds-list/feeds-list.component';
// import {AdDirective} from '../../shared/feeds/directives/ad.directive';

import {UserComponent} from '../user/components/user/user.component';

import {EmployeeComponent} from '../employee/components/employee/employee.component';
import {CategoryComponent} from '../category/components/category/category.component';
import {ProviderComponent} from '../provider/components/provider/provider.component';
import {ProductComponent} from '../product/components/product/product.component';

import {EntitiesManagmentComponent} from './entities-managment.component';
import {EntityManagmentRoutingModule} from './entity-managment-routing.module';

import {CustomerModule} from '../customer/modules/customer.module';
import {ProductModule} from '../product/modules/product.module';
import {ProviderModule} from '../provider/modules/provider.module';
import {EmployeeModule} from '../employee/modules/employee.module';

@NgModule({
  imports: [
    CommonModule,
    EntityManagmentRoutingModule,
    CustomerModule,
    ProductModule,
    ProviderModule,
    EmployeeModule
  ],
  declarations: [
    UserComponent,
    EntitiesManagmentComponent
  ],
  exports: []
})
export class EntitiesManagmentModule {
}
