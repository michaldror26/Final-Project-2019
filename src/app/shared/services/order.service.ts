import { Injectable } from '@angular/core';
import { CartService } from "src/app/shopping/cart.service";
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

  constructor(
    private cartService: CartService) { }

  async placeOrder(order) {
     let result// = await this.db.list('/order').push(order);
    this.cartService.flushCart();
    return result;
  }

  getAllOrders() {
    // return this.db.list('/order');

    
  }

  getOrderByUser(userId: string) {
    // return this.db.list('/order', {
    //   query: {
    //     orderByChild: 'user/userId',
    //     equalTo: userId
    //   }
    // });
  }

  getOrderById(orderId: string) {
    return new Observable() //this.db.object('/order/' + orderId);
  }


}
