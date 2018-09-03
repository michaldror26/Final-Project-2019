// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modules - ourCustom
import {EntitiesManagmentModule} from './admin/entitiesManagment/entities-managment.module';
import {SharedModule} from "./shared/shared.module";

// Components
import {AppComponent} from './app.component';

import { LayoutHeaderComponent } from './shared/layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './shared/layout/layout-footer/layout-footer.component';



@NgModule({
  imports: [
    BrowserModule,
    EntitiesManagmentModule,
    SharedModule
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
