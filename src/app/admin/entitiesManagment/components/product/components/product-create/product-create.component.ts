import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../../../shared/services/category.service';
import {ProductService} from '../../../../../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

// import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categories$;
  product; // : IProduct = {} as IProduct;
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id) {
    //   this.productService.getById(this.id)
    //     .take(1)
    //     .subscribe(product => this.product = product);
    // }
  }
  save(product) {
    // if (this.id) this.productService.updateById(this.id, product);
    // else this.productService.create(product);
    //
    // this.router.navigate(['/admin/products']);
  }

  delete() {
    // if (confirm('Are you sure?')) {
    //   if (this.id) {
    //     this.productService.deleteById(this.id);
    //     this.router.navigate(['/admin/products']);
    //   }
    // }
  }

}
