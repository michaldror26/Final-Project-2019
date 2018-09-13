import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./auth.component";
import {Auth2RoutingModule} from "./auth2-routing.module";

@NgModule({
  imports: [
    CommonModule,
    Auth2RoutingModule
  ],
  declarations: [AuthComponent]
})
export class Auth2Module { }
