import {ROOT_URL} from '../config';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SaleOrderService {
  rootUrl = ROOT_URL + 'Order/customer';

  constructor(private httpClient: HttpClient) {

  }

  add(productsToSubmit: any[], id?: number): Observable<string> {
    if (id) {
      return this.httpClient.post<string>(this.rootUrl + '/' + id, productsToSubmit)
        .pipe(
          map(
            data => {

              return data;
            },
            error => {
            }
          ));
    } else {
      return this.httpClient.post<string>(this.rootUrl + '/' + id, productsToSubmit)
        .pipe(
          map(
            data => {
              return data;
            },
            error => {
            }
          ));
    }
  }
}
