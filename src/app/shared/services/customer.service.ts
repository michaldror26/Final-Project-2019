import {Injectable} from '@angular/core';
import {Customer} from '../models/Customer.class';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map, catchError, filter, find, first} from 'rxjs/operators';
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
  private cusArr$: Observable<Customer[]>;


  constructor(private _http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {

    this.cusArr$ = this._http
      .get<Customer[]>(ROOT_URL + 'customer/getAllCustomers')
      .pipe(
        map(
          data => {
            return data;
          },
          error => {
          })
      );

    return this.cusArr$;
  }

  // getCustomers(): Customer[] {
  //   return this.cusArr;
  // }
  getCustomer(id: number): Observable<Customer> {
    return this._http
      .get<Customer>(ROOT_URL + 'customer/getCustomer?id=' + id)
      .pipe(
        map(
          data => {
            return data;
          },
          error => {
          })
      );
  }

  deleteCustomer(id: number) {
    // const index = this.cusArr.findIndex(customer => customer.CustomerId === id);
    // if (index !== -1) {
    //   this.cusArr.splice(index, 1);
    // }
    this._http.get('http://localhost:49738/api/customer/deleteCustomer/?id=' + id);

  }

  editCustomer(updatedCustomer: Customer) {

    const _headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
debugger
    const index = this.cusArr.findIndex(customer => customer.CustomerId === updatedCustomer.CustomerId, {headers: _headers});
    if (index !== -1) {
      //   // TODO implement this as reallity
      this.cusArr[index] = updatedCustomer;
    }
debugger
    this._http.post(ROOT_URL + 'customer/editCustomer', JSON.stringify(updatedCustomer));

  }

  search(text: string): Observable<Customer[]> {
    let list;
    this.getCustomers().subscribe(l => list = l);
    list.filter(customer =>
      customer.FirstName.includes(text)
      || customer.LastName.includes(text)
      || customer.MobilePhone.includes(text)
      || customer.Email.includes(text)
    );
    return list.unsubscribe();
  }
}
