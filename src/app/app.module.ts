// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

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


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
