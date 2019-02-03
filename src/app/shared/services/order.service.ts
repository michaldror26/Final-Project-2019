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

  getOrderByUser(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(ROOT_URL + 'order/customer/16');
  }

  getOrderById(orderId: number) {
    return this.httpClient.get<any[]>(ROOT_URL + 'order/GetOrder/' + orderId);
  }


}
