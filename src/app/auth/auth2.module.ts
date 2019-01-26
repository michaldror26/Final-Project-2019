import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from "./auth.component";
import {Auth2RoutingModule} from "./auth2-routing.module";
import {SiteUserService} from '../shared/services/siteUser.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Auth2RoutingModule,
    HttpClientModule
  ],
  declarations: [AuthComponent],
  providers:[CookieService,
             SiteUserService],
})
export class Auth2Module { }
