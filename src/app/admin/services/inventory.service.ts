import {ROOT_URL} from '../../shared/config';
import {Observable} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
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

  getInventory(): Observable<any> {
    return this.httpClient
      .get<any>(ROOT_URL + 'inventory/getInventory')
      .pipe(
        map(
          data => {
            return data;
          },
          error => {
          })
      );
  }

  search(text, inventoryReal, countFrom: number = 0, countTo: number): any[] {
    text = text.trim();
    if (!countTo) countTo = Math.max(...inventoryReal.map(x => x.Amount));
    return inventoryReal.filter(_product =>
      (
        _product.Product.Name.includes(text)
        || _product.Product.Category && _product.Product.Category.Name.includes(text)
        || _product.Product.Category &&
        _product.Product.Category.ParentCategory &&
        _product.Product.Category.ParentCategory.Name.includes(text)
       || _product.Product.Category &&
        _product.Product.Category.ParentCategory &&
        _product.Product.Category.ParentCategory.ParentCategory &&
        _product.Product.Category.ParentCategory.ParentCategory.Name.includes(text)
      )

      && _product.Amount >= countFrom
      && _product.Amount <= countTo
    );
  }

// c:Category parameter\
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

  updateAmount(arr: object[]) {
    //TODO
    this.httpClient;

  }
}
