import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {OrderProduct} from 'src/app/shared/models/OrderProduct.class';
import {CurrentUser} from '../../shared/currentUser';
import {Customer} from '../../shared/models/Customer.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart = {
    products: [],
    cartTotal: 0,
    numProducts: 0
  };
  discount = null;

  constructor(public cartService: CartService,
              public currentUser: CurrentUser) {

  }

  async ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart);

    if (this.currentUser.isCustomer()) {
      this.discount = (this.currentUser.get() as Customer).DiscountPercentage;
    }
  }


  numProducts(): number {
    return this.cartService.numProducts;
  }

  deleteProduct(product) {
    this.cartService.deleteProductFromCart(product);
    this.cart = this.cartService.getCart();
  }

  submitOrder() {
    this.cartService.saveCartOnServer().then(() => {
      // this.clearAll();
    });
  }

  addToCart(product) {
    console.log(product);
    this.cartService.addProductToCart(product);
    this.cart = this.cartService.getCart();
  }

  removeOneProduct(product) {
    this.cartService.removeProductFromCart(product);
    this.cart = this.cartService.getCart();
  }

  clearAll() {
    // this.cart.products = [];
    // this.cart.cartTotal = 0;
    this.cartService.flushCart();
    this.cart = this.cartService.getCart();
  }

}
