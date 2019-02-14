import { Injectable, OnInit, Injector } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product.class';
import { OrderProduct } from '../shared/models/OrderProduct.class';
import { SaleOrderService } from '../shared/services/saleOrder.service';
import { PurchaseOrderService } from '../shared/services/purchaseOrder.service';

export const OrderServiceMap = {
  sale: SaleOrderService,
  purchase:  PurchaseOrderService
};
@Injectable()
export class CartService {

  orderProducts:OrderProduct[] =[]
  cartTotal: number = 0;
  initF: boolean = true;
 
  private productAddedSource = new Subject<any>()
  productAdded$ = this.productAddedSource.asObservable()

  type:string=null;
  owerId: number=null;
  orderService;
 
  constructor(private injector:Injector) {
  }
  init() {
    if (this.orderProducts == [])
      if (localStorage.getItem('products') !== null) {
        let products = localStorage.getItem('products');
        this.orderProducts = JSON.parse(products);
        this.orderProducts.forEach(prod => {
          this.cartTotal += prod.Product.SellingPrice * prod.Amount;
        });
        this.productAddedSource.next({ products: this.orderProducts, cartTotal: this.cartTotal });
      }

    //  if (OrderServiceMap.hasOwnProperty(this.type))
    //     this.orderService=this.injector.get<any>(OrderServiceMap[this.type]);
    if(this.type==null ||this.type=='sale'){
      this.orderService=this.injector.get<any>(SaleOrderService);
      }
      else{
      if(this.type=='purchase')
      this.orderService= this.injector.get<any>(PurchaseOrderService);
      }
      
    console.log("type="+this.type);
   
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

  async saveCartOnServer(){
    let productsToSubmit:any[]=[];
    await this.orderProducts.forEach(prod=>
      productsToSubmit.push({productId:prod.Product.ProductId,Amount:prod.Amount}));

       if(this.type!=null){
        if(this.owerId==null){
            alert("עליך לבחור נמען");
            return;
       }
       await this.orderService.add(productsToSubmit,this.owerId).subscribe();
      }
     else
        //הזמנה ללקוח נוכחי
         await this.orderService.add(productsToSubmit).subscribe();

    }

 }



  

