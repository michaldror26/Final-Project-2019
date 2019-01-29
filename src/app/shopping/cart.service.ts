import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product.class';
import { OrderProduct } from '../shared/models/OrderProduct.class';


@Injectable()
export class CartService {

  orderProducts:OrderProduct[] =[]
  cartTotal: number = 0;
  initF: boolean = true;

  private productAddedSource = new Subject<any>()


  productAdded$ = this.productAddedSource.asObservable()

  constructor() {
  }
  init() {
    if (this.orderProducts == [])
      if (localStorage.getItem('products') !== null) {
        let products = localStorage.getItem('products');
        this.orderProducts = JSON.parse(products);
        this.orderProducts.forEach(prod => {
          this.cartTotal += prod.parsedPrice;
        });
        this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal })
      }
  }
  getCart() {

  }
  addProductToCart(product:Product) {
    let exists = false
    let parsedPrice = parseFloat(product.SellingPrice.toString().replace(/\./g, '').replace(',', '.'))
    this.cartTotal += parsedPrice;
    //Search this product on the cart and increment the quantity
    this.orderProducts = this.orderProducts.map(_product => {
      if (_product.ProductId == product.ProductId) {
        _product.Amount++
        exists = true
      }
      return _product
    })
    //Add a new product to the cart if it's a new product
    if (!exists) {
      //?product.parsedPrice = parsedPrice
      this.orderProducts.push({
        ProductId:product.ProductId,
        Amount:1,
        parsedPrice:product.SellingPrice
      })
    }

    console.log('product',this.orderProducts);
    console.log('cartTotal',this.cartTotal);
    this.saveCartLocaly();
    this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal })
  }

  deleteProductFromCart(product) {
    this.orderProducts = this.orderProducts.filter(_product => {
      if (_product.ProductId == product.id) {
        this.cartTotal -= _product.parsedPrice * _product.Amount
        return false
      }
      return true
    })
    this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal })
    this.saveCartLocaly();
  }


  flushCart() {
    this.orderProducts = []
    this.cartTotal = 0
    this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal })
    this.saveCartLocaly();
  }

  saveCartLocaly() {
    localStorage.setItem('products', JSON.stringify(this.orderProducts));
  }
}
