import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ROOT_URL} from '../config';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  orders;

  constructor(private httpClient: HttpClient) {
  }


  getAllOrders() {

  }

  getOrderByUser(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(ROOT_URL + 'order/customer/' + userId);
  }

  getOrderById(orderId: number) {
    return this.httpClient.get<any[]>(ROOT_URL + 'order/GetOrder/' + orderId);
  }

  addCustomerOrder(productsToSubmit:any[],id?:number):Observable<string>
  {
    let url='Order/customer';
    if(id!=null)
    url=url+'/'+id;
    return this.httpClient.post<string>(ROOT_URL+url,productsToSubmit)
    .pipe(
    map(
      data => {return data;},
      error =>{}
  ));
  }

  addProviderOrder(productsToSubmit:any[],id:number)
  {
    return this.httpClient.post<string>(ROOT_URL+'order/provider/'+id,productsToSubmit)
    .pipe(
    map(
      data => {return data;},
      error =>{}
  ));
  }
}
