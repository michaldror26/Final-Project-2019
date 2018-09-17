import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   redirectTo:''
  // },
  {
    path: 'login',
    loadChildren: './auth/auth2.module#Auth2Module'
  }
// ,{
  //   path: 'chart',
  //   loadChildren: ''
  // },
  // {
  //   path: 'products',
  //   loadChildren: ''
  // },
  // {
  //   path: 'contact',
  //   loadChildren: './shared/contact.module#ContactModule'
  // },
  // {
  //   path: 'about',
  //   loadChildren: './shared/about.module#AboutModule'
  // },

  // {
  //   path: '**',
  //   redirectTo: ''
  // }
  , {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
  //,
  // {
  //   path: 'customer',
  //   loadChildren: './customer/customer.module#CustomerModule'
  // },
  // {
  //   path: 'employee',
  //   loadChildren: './employee/employee.module#EmployeeModule'
  // }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
