<<<<<<< HEAD
// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Modules - ourCustom
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import {Auth2Module} from './auth/auth2.module';
import {ShoppingModule} from './shopping/shopping.module';
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';
import {LayoutHeaderComponent} from './shared/components/layout/layout-header/layout-header.component';
import {LayoutFooterComponent} from './shared/components/layout/layout-footer/layout-footer.component';
import { CommonModule } from '@angular/common';

import {AuthService} from './shared/services/auth.service';
import {CurrentUser} from './shared/currentUser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgbModule,
    // GoTopButtonModule, to install
    HomeModule,
    SharedModule,
    Auth2Module,
    AdminModule,
    ShoppingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
  bootstrap: [AppComponent],
  providers:[ CookieService,
              AuthService,
              CurrentUser]
})
export class AppModule {
}











=======
// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Modules - ourCustom
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import {Auth2Module} from './auth/auth2.module';
import {ShoppingModule} from './shopping/shopping.module';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {LayoutHeaderComponent} from './shared/components/layout/layout-header/layout-header.component';
import {LayoutFooterComponent} from './shared/components/layout/layout-footer/layout-footer.component';
import { CommonModule } from '@angular/common';

import {AuthService} from './shared/services/auth.service';
import {CurrentUser} from './shared/currentUser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgbModule,
    // GoTopButtonModule, to install
    HomeModule,
    SharedModule,
    Auth2Module,
    AdminModule,
    ShoppingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  bootstrap: [AppComponent],
  providers:[ CookieService,
              AuthService,
              CurrentUser]
})
export class AppModule {
}











>>>>>>> 3e414644bb9cc468301f2c473745b8f8cb0ac38f
