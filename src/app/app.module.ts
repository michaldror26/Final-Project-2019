// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modules - ourCustom
import {EntitiesManagmentModule} from './admin/entitiesManagment/entities-managment.module';
import {SharedModule} from './shared/shared.module';
import {EmployeeModule} from './employee/employee.module';
import {HomeModule} from './home/home.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {Auth2Module} from "./auth/auth2.module";
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';

import {LayoutHeaderComponent} from './shared/layout/layout-header/layout-header.component';
import {LayoutFooterComponent} from './shared/layout/layout-footer/layout-footer.component';


@NgModule({
  imports: [
    BrowserModule,
    // NgbModule,
   // GoTopButtonModule, to install
    HomeModule,
    AdminRoutingModule,
    SharedModule,
    EmployeeModule,
    EntitiesManagmentModule,
    Auth2Module,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
