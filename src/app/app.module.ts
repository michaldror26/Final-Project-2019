// Modules - angularCore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Modules - ourCustom
import {EntitiesManagmentModule} from './admin/entitiesManagment/entities-managment.module';

// Components
import {AppComponent} from './app.component';
import {EntitiesManagmentComponent} from './admin/entitiesManagment/entities-managment.component';

@NgModule({
  imports: [
    BrowserModule,
    EntitiesManagmentModule,
    EntitiesManagmentComponent
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
