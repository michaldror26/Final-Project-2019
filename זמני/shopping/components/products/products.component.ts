import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Product } from '../../../shared/models/Product.class';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[];
  category: number;
  cart$: Observable<ShoppingCart>;

  constructor(
    private cartService: ShoppingCartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = !this.category ? this.products
      : this.products.filter(e => e.categoryId === this.category);
  }


}
