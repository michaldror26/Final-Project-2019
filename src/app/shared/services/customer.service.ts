import {Injectable} from '@angular/core';
import {Customer} from '../models/Customer.class';
import {Http, Response} from '@angular/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError, filter, find, first, finalize} from 'rxjs/operators';
import {findLast} from '@angular/compiler/src/directive_resolver';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ROOT_URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private cusArr: Customer[] = [
    {
      CustomerId: 1,
      DiscountPercentage: 98,
      FirstName: 'מרים',
      LastName: 'טרבלסי',
      MobilePhone: '0587896541',
      City: 'בני ברק',
      Email: 'miryam@gmail.com',
      Telephone: '097496761',
      RegisteredDate: new Date().toLocaleDateString(),
      AuthenticationTypeId: 2,
      // userName: 'fvdgvgb',
      //  password: '26565'
    },
    {
      CustomerId: 2,
      DiscountPercentage: 98,
      FirstName: 'sara',
      LastName: 'trabelsi',
      MobilePhone: '0587896541',
      City: 'bney brak',
      Email: 'sara555@gmail.com',
      Telephone: '097496761',
      RegisteredDate: new Date().toLocaleDateString(),
      AuthenticationTypeId: 2,
      // userName:'fvdgvgb',
      // password:'26565'
    },
    {
      CustomerId: 3,
      DiscountPercentage: 98,
      FirstName: 'dafna',
      LastName: 'trabelsi',
      MobilePhone: '0587896541',
      City: 'bney brak',
      Email: 'dafnat555@gmail.com',
      Telephone: '097496761',
      RegisteredDate: new Date().toLocaleDateString(),
      AuthenticationTypeId: 2,
      // userName:'fvdgvgb',
      // password:'26565'
    }
  ];


  constructor(private _http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(ROOT_URL + 'customer/getAllCustomers')
      .pipe(
        catchError((error: Response) => {
          return throwError('Something went wrong');
        }));
  }

  getCustomer(id: number): Observable<Customer> {
    return this._http
      .get<Customer>(ROOT_URL + 'customer/getCustomer?id=' + id)
      .pipe(
        map(
          data => {
            return data;
          })
      );
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this._http.delete<Customer>(ROOT_URL + 'customer/deleteCustomer?id=' + id)
      .pipe(
        map(
          data => {
            return data;
          })
      );

  }

  editCustomer(updatedCustomer: Customer): Observable<Customer> {
    return this._http.post<Customer>(ROOT_URL + 'customer/editCustomer', updatedCustomer)
      .pipe(
        map(
          data => {
            return data;
          }
        ));

  }

  addCustomer(newCustomer: Customer): Observable<Customer> {
    return this._http.put<Customer>(ROOT_URL + 'customer/addCustomer', newCustomer)
      .pipe(
        map(
          data => {
            return data;
          })
      );


  }


  search(custs: Customer[], text: string): Customer[] {
    return custs.filter(customer =>
      customer.FirstName.includes(text)
      || customer.LastName.includes(text)
      || customer.MobilePhone.includes(text)
      || customer.Email.includes(text)
    );

  }
}
