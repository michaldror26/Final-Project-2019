import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ROOT_URL } from 'src/app/shared/config';
import { Observable } from 'rxjs';

@Injectable()
export class BIService {
  constructor(private httpClient:HttpClient){}

   getSaleProducts():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/product')
    .pipe(
    map(
      data => { 
        delete data['$id'];
      
          return data},
      error =>{}
  ));
 }

 getSaleCustomers():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/customer')
    .pipe(
    map(
      data => {           
        delete data['$id'];
          return data},
      error =>{}
  ));
 }
 
 getSaleMonths():Observable<object>{
  return this.httpClient.get(ROOT_URL+'bi/sale/month')
  .pipe(
  map(
    data => {           
      delete data['$id'];
        return data},
    error =>{}
));
}
}
