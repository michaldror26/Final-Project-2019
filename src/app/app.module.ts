// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'

// Modules - ourCustom
import {EntitiesManagmentModule} from './admin/entitiesManagment/entities-managment.module';
import {SharedModule} from './shared/shared.module';
// import {EmployeeModule} from './employee/employee.module';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';
import {Auth2Module} from './auth/auth2.module';
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';
import {LayoutHeaderComponent} from './shared/components/layout/layout-header/layout-header.component';
import {LayoutFooterComponent} from './shared/components/layout/layout-footer/layout-footer.component';

// import {ShoppingModule} from './shopping/shopping.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule,
    // GoTopButtonModule, to install
    HomeModule,
    SharedModule,
    // EmployeeModule,
    // EntitiesManagmentModule,
    Auth2Module,
    AdminModule,
    // ShoppingModule,
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
