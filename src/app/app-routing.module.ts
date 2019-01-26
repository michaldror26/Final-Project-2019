<<<<<<< HEAD
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
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoadImageBase64Component} from './shared/components/load-image-base64/load-image-base64.component';
import {AboutUsComponent} from './shared/components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: './auth/auth2.module#Auth2Module'
  }, {
    path: 'contact',
    loadChildren: './shared/components/contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    component: AboutUsComponent
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule'
  }, {
    path: 'base64',
    component: LoadImageBase64Component
  }, {
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
>>>>>>> 3e414644bb9cc468301f2c473745b8f8cb0ac38f
