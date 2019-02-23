import {Injectable} from '@angular/core';
import {Product} from '../models/Product.class';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ROOT_URL} from '../config';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {ID: 1, CategoryId: 2, Name: 'product1', SellingPrice: 25},
    {ID: 2, CategoryId: 3, Name: 'product2', SellingPrice: 125},
    {ID: 3, CategoryId: 3, Name: 'product3', SellingPrice: 255},
    {ID: 4, CategoryId: 2, Name: 'product4', SellingPrice: 85}
  ];
  basicURL: string = 'urlBasic';

  constructor(private _http: HttpClient) {
  }

  create(product) {
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(ROOT_URL + 'product/getAllProducts')
      .pipe(
        catchError((error: Response) => {
          return throwError('Something went wrong');
        }));
  }

  getProduct(id: number): Observable<Product> {
    return this._http
      .get<Product>(ROOT_URL + 'product/getProduct?id=' + id)
      .pipe(
        map(
          data => {
            return data;
          })
      );
  }

  getProductIncludeSiteUser(id: number): Observable<Product> {
    return this._http
      .get<Product>(ROOT_URL + 'product/includeSiteUser/' + id + '')
      .pipe(
        map(
          data => {
            return data;
          })
      );
  }

  deleteProduct(id: number): Observable<Product> {
    return this._http.delete<Product>(ROOT_URL + 'product/deleteProduct?id=' + id)
      .pipe(
        map(
          data => {
            return data;
          })
      );

  }

  editProduct(updatedProduct: Product): Observable<Product> {
    return this._http.post<Product>(ROOT_URL + 'product/editProduct', updatedProduct)
      .pipe(
        map(
          data => {
            return data;
          }
        ));

  }

  addProduct(newProduct: Product): Observable<Product> {
    return this._http.put<Product>(ROOT_URL + 'product/addProduct', newProduct)
      .pipe(
        map(
          data => {
            return data;
          })
      );


  }


  search(prods: Product[], text: string): Product[] {
    return prods.filter(product =>
      product.Name.includes(text)
      || product.Category.Name.includes(text)
      || product.SellingPrice.toString().includes(text)
    );

  }
}
