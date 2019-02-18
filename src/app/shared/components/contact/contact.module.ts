import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent],
  exports: []
})
export class ContactModule {
}
