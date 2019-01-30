import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

import {HttpClientModule} from '@angular/common/http';
import {Auth2RoutingModule} from './auth2-routing.module';
import {SiteUserService} from '../shared/services/siteUser.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Auth2RoutingModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    CookieService,
    SiteUserService
  ],
})
export class Auth2Module {
}
