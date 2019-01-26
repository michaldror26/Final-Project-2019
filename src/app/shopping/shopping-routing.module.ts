import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingProductsComponent } from './products/shipping-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderViewComponent } from './order-view/order-view.component';

const routes: Routes = [
  {
    path: 'products',
    component: ShippingProductsComponent
    // ,canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent
    // ,canActivate: [AuthGuard]
  },
  { path: 'myorders', component: MyOrdersComponent },
  // { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
  // { path: 'order-success/:id', component: OrderSuccssComponent, canActivate: [AuthGuardService] },
  // { path: 'order-details/:id', component: OrderViewComponent, canActivate: [AuthGuardService] }
  { path: 'orderdetails/:id', component: OrderViewComponent }

];

  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
