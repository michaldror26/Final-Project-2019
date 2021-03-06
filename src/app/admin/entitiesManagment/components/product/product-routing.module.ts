import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProductViewComponent} from './components/product-view/product-view.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductDeleteComponent} from './components/product-delete/product-delete.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductService} from '../../../../shared/services/product.service';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'view'},
  {path: 'view', component: ProductViewComponent, data: {name: 'מוצרים', atNavBar: true}},
  {path: 'addoredit/:id', component: ProductEditComponent, data: {name: 'עריכה מחדש', atNavBar: true}},
  {path: 'addoredit', component: ProductEditComponent, data: {name: 'מוצר חדש', atNavBar: true}},
  {path: 'delete/:id', component: ProductDeleteComponent, data: {name: 'מחיקה', atNavBar: false}},
  {path: 'details/:id', component: ProductDetailsComponent, data: {name: 'פרטים', atNavBar: false}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductService]

})
export class ProductRoutingModule {
}
