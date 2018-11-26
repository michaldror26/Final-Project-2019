import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CartComponent } from './cart/cart.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CartPreviewComponent } from './cart-preview/cart-preview.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';

import { DataService } from './data.service';
import { CartService } from './cart.service';
import { UrlFormComponent } from './url-form/url-form.component';
import { ShoppingComponent } from './shopping.component';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    CartComponent,
    ProductThumbnailComponent,
    CartPreviewComponent,
    SortFiltersComponent,
    UrlFormComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ShoppingRoutingModule
  ],
  providers: [
    DataService,
    CartService
  ],
  exports:[]
})
export class ShoppingModule { }
