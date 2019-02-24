import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../../../shared/services/category.service';
import {ProductService} from '../../../../../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../../../../shared/models/Product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      await this.productService.getProduct(this.id)
        .subscribe(product => this.product = product);
    }
    this.product = new Product();
  }

  setImage($event) {
    this.product.Image = $event;
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
