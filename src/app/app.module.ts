// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modules - ourCustom
import {EntitiesManagmentModule} from './admin/entitiesManagment/entities-managment.module';
import {SharedModule} from './shared/shared.module';
import {EmployeeModule} from './employee/employee.module';
import {HomeModule} from './home/home.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';

import {LayoutHeaderComponent} from './shared/layout/layout-header/layout-header.component';
import {LayoutFooterComponent} from './shared/layout/layout-footer/layout-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AdminRoutingModule,
    SharedModule,
    EmployeeModule,
    EntitiesManagmentModule,
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
