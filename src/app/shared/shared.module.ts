import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BreadcrumbComponent, ContactComponent],
  exports: [BreadcrumbComponent, ContactComponent]
})
export class SharedModule {
}
