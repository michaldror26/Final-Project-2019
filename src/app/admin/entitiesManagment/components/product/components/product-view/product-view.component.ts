import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../../../shared/services/product.service';
import {Product} from '../../../../../../shared/models/Product.class';
import {parseAndResolve} from '../../../../../../shared/services/CommonMethods';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products: Product[];

  constructor(public productService: ProductService) {
  }

  async ngOnInit() {
    await this.productService.getProducts().subscribe(products => {
      this.products = parseAndResolve((JSON.stringify(products)));
      console.log(this.products);
    });

  }

}
