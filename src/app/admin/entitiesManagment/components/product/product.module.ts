import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {ProductDeleteComponent} from './components/product-delete/product-delete.component';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {ProductComponent} from './components/product.component';

import {ProductRoutingModule} from './product-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {ProductService} from '../../../../shared/services/product.service';
import {LoadImageBase64Component} from '../../../../shared/components/load-image-base64/load-image-base64.component';



@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [
    ProductComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailsComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
