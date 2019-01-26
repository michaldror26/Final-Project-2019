import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ListOrderViewComponent } from './components/list-order-view/list-order-view.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListOrderViewComponent],
  exports: [ ]
})
export class SharedModule {
}
