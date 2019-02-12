import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product.class';
import { OrderProduct } from '../shared/models/OrderProduct.class';
import {ROOT_URL} from '../shared/config'
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../shared/services/order.service';
import { CurrentUser } from '../shared/currentUser';
import { SaleOrderService } from '../shared/services/saleOrder.service';

@Injectable()
export class CartService {

  orderProducts:OrderProduct[] =[]
  cartTotal: number = 0;
  initF: boolean = true;
 
  private productAddedSource = new Subject<any>()


  productAdded$ = this.productAddedSource.asObservable()
  owerId: number;
  _type:string;
  get type(){return this._type}
  set type(value){this._type=value;
  if(this.type=='sale')
      this.service==this.saleOrderService
    if(this.type=='p'){}}
  service;
  constructor(private saleOrderService:SaleOrderService,private currentUser:CurrentUser) {
  }
  init() {
    if (this.orderProducts == [])
      if (localStorage.getItem('products') !== null) {
        let products = localStorage.getItem('products');
        this.orderProducts = JSON.parse(products);
        this.orderProducts.forEach(prod => {
          this.cartTotal += prod.Product.SellingPrice*prod.Amount;
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
      if (_product.Product.ProductId == product.ProductId) {
        _product.Amount++
        exists = true
      }
      return _product
    })
    //Add a new product to the cart if it's a new product
    if (!exists) {
      //?product.parsedPrice = parsedPrice
      this.orderProducts.push({
        Product:product,
        Amount:1,
      })
    }

    console.log('product',this.orderProducts);
    console.log('cartTotal',this.cartTotal);
    this.saveCartLocaly();
    this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal })
  }

  deleteProductFromCart(product:Product) {
    this.orderProducts = this.orderProducts.filter(_product => {
      if (_product.Product.ProductId == product.ProductId) {
        this.cartTotal -= _product.Product.SellingPrice * _product.Amount
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

  saveCartOnServer(){
    let productsToSubmit:any[]=[];
    this.orderProducts.forEach(prod=>
      productsToSubmit.push({productId:prod.Product.ProductId,Amount:prod.Amount}));

     if(this.currentUser.isLogin())
     {
        if(this.currentUser.isAdmin()){
          if(this.owerId==null){
            alert("עליך לבחור נמען");
            return;
           }
              this.service.add(productsToSubmit,this.owerId).subscribe();

        }

        if(this.currentUser.isCustomer()){
          this.service.add(productsToSubmit).subscribe();

    }

     }



   }
  
}

