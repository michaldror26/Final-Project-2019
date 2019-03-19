// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CommonModule} from '@angular/common';

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

// Services
import {AuthService} from './shared/services/auth.service';
import {CurrentUser} from './shared/currentUser';
import {LoadImageBase64Component} from './shared/components/load-image-base64/load-image-base64.component';
// import {OrderViewComponent} from './shopping/order-view/order-view.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    // OrderViewComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    AuthService,
    CurrentUser,
  ]
})
export class AppModule {
}











