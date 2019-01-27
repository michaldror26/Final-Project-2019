import {ROOT_URL} from '../../shared/config';
import {Observable} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Category} from 'src/app/shopping/shared/category.model';
import {Injectable} from '@angular/core';
import {Product} from 'src/app/shared/models/Product.class';

@Injectable()
export class InventoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAmountProject(): Observable<number> {
    return this.httpClient
      .get<number>(ROOT_URL + 'products/amount/1031')
      .pipe(
        map(
          data => {
            return data;
          },
          error => {
          })
      );
  }

// c:Category parameter
  getAllSubCategories(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(ROOT_URL + 'products/category/2')
      .pipe(
        map(data => {
            return data;
          },
          error => {
          }
        ));

  }
}
