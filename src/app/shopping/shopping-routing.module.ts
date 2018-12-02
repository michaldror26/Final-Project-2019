import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ShippingProductsComponent} from './products/shipping-products.component';

const routes: Routes = [
  {
    path: '/products',
    component: ShippingProductsComponent
    // ,canActivate: [AuthGuard]
  },
  {
    path: '/cart',
    component: CartComponent
    // ,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
