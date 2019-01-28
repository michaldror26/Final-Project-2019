import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product.class';


@Injectable()
export class CartService {

  products =[]
  cartTotal: number = 0;

  initF: boolean = true;

  private productAddedSource = new Subject<any>()


  productAdded$ = this.productAddedSource.asObservable()

  constructor() {
  }
  init() {
    if (this.products == [])
      if (localStorage.getItem('products') !== null) {
        let products = localStorage.getItem('products');
        this.products = JSON.parse(products);
        this.products.forEach(prod => {
          this.cartTotal += prod.product.parsedPrice;
        });
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
      }
  }
  getCart() {

  }
  addProductToCart(product) {
    let exists = false
    let parsedPrice = parseFloat(product.SellingPrice.toString().replace(/\./g, '').replace(',', '.'))
    this.cartTotal += parsedPrice;
    //Search this product on the cart and increment the quantity
    this.products = this.products.map(_product => {
      if (_product.product.id == product.ProductId) {
        _product.Amount++
        exists = true
      }
      return _product
    })
    //Add a new product to the cart if it's a new product
    if (!exists) {
      product.parsedPrice = parsedPrice
      this.products.push({
        product: Product,
        quantity: 1
      })
    }

    console.log('product',this.products);
    console.log('cartTotal',this.cartTotal);
    this.saveCartLocaly();
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }

  deleteProductFromCart(product) {
    this.products = this.products.filter(_product => {
      if (_product.product.id == product.id) {
        this.cartTotal -= _product.product.parsedPrice * _product.Amount
        return false
      }
      return true
    })
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
    this.saveCartLocaly();
  }


  flushCart() {
    this.products = []
    this.cartTotal = 0
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
    this.saveCartLocaly();
  }

  saveCartLocaly() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
