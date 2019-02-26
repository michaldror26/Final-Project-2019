import {ROOT_URL} from '../config';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SaleOrder} from '../../admin/sale/sale/models/SaleOrder.class';


@Injectable()
export class SaleOrderService {
  rootUrl = ROOT_URL + 'order/customer';

  constructor(private httpClient: HttpClient) {

  }

  add(productsToSubmit: any[], id?: number): Observable<SaleOrder> {
    console.log(id)
    if (id) {
      return this.httpClient.post<SaleOrder>(this.rootUrl + '/' + id, productsToSubmit)
        .pipe(
          map(
            order => {
              return order;
            },
            error => {
            }
          ));
    } else {
      return this.httpClient.post<SaleOrder>(this.rootUrl + '/' + id, productsToSubmit)
        .pipe(
          map(
            order => {
              return order;
            },
            error => {
            }
          ));
    }
  }
}
