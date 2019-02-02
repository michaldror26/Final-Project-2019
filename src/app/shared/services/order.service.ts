import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ROOT_URL} from '../config';

@Injectable()
export class OrderService {

  orders;

  constructor(private httpClient: HttpClient) {
  }


  getAllOrders() {

  }

  getOrderByUser(userId): Observable<any[]> {
     this.orders = this.httpClient.get<any[]>(ROOT_URL + 'order/customer/16');
debugger
    return this.orders;

  }

  getOrderById(orderId: string) {
    return new Observable(); // this.db.object('/order/' + orderId);
  }


}
