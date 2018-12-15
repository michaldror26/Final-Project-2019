import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../../cart.service';
import {Product} from '../../../shared/product.model';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  detailViewActive: boolean;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
  }

  productClicked() {
    this.detailViewActive = !this.detailViewActive;
  }

  addToCart() {
    this.cartService.addProductToCart(this.product);
  }

}
