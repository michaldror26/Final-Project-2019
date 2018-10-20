import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductCreateComponent} from '../components/product-create/product-create.component';
import {ProductEditComponent} from '../components/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../components/product-delete/product-delete.component';
import {ProductViewComponent} from '../components/product-view/product-view.component';
import {ProductComponent} from '../product.component';

import {ProductRoutingModule} from './product-routing.module';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import {ProductService} from '../services/product.service';



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
