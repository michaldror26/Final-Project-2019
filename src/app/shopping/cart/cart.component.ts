import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderProduct } from 'src/app/shared/models/OrderProduct.class';
//import { Product } from '../shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart = {
  products:[],
  cartTotal: 0,
  numProducts: 0
};


constructor(private cartService: CartService) {
}

ngOnInit() {
  // this.cartService.productAdded$.subscribe(data => {
  //   this.cart.products = data.products
  //   this.cart.cartTotal = data.cartTotal
  //   this.cart.numProducts = data.products.reduce((acc, product) => {
  //     acc += product.quantity
  //     return acc
  //   }, 0);
  // }
  this.cart.products = this.cartService.orderProducts;
  this.cart.cartTotal = this.cartService.cartTotal;
  this.cart.numProducts = this.cartService.orderProducts.reduce((acc, product) => {
    acc += product.Amount;
    return acc
  }, 0);
  // this.cart.products = ["מוצר1", "מוצר2", "מוצר3"];
  // this.cart.cartTotal = 328;
  // this.cart.numProducts = 3;
  // console.log(this.cart);
}

addOneMoreProduct(id){
  // this.cartService.addProductToCart(id);
}
removeOneProduct(id){
}

clearAll() {
  this.cart.products = [];
  this.cart.cartTotal = 0;
  this.cart.numProducts = 0;
  // this.cartService.flushCart();
}

}
