import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListOrderViewComponent} from './components/list-order-view/list-order-view.component';

import {LoadImageBase64Component} from './components/load-image-base64/load-image-base64.component';
import {ScrollToTopComponent} from './components/layout/scroll-to-top/scroll-to-top.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListOrderViewComponent,
    LoadImageBase64Component,
    ScrollToTopComponent,
    AboutUsComponent,
  ],
  exports: [
    ListOrderViewComponent,
    LoadImageBase64Component,
    ScrollToTopComponent,
    AboutUsComponent,
  ]
})
export class SharedModule {
}
