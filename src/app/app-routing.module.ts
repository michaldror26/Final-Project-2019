import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './auth/auth2.module#Auth2Module'
  }
  , {
    path: 'contact',
    loadChildren: './shared/components/contact/contact.module#ContactModule'
  }
  // ,
  // {
  //   path: 'about',
  //   loadChildren: './components/shared/about.module#AboutModule'
  // }

  , {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
  , {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule'
  }
  //,{
   // path: 'signup',
  
  //}
  // ,
  // {
  //   path: 'customer',
  //   loadChildren: './customer/customer.module#CustomerModule'
  // },
  // {
  //   path: 'employee',
  //   loadChildren: './employee/employee.module#EmployeeModule'
  // }
  , {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
