import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ROOT_URL } from 'src/app/shared/config';
import { Observable } from 'rxjs';

@Injectable()
export class BIService {
  constructor(private httpClient:HttpClient){}

   getSaleValue():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/product')
    .pipe(
    map(
      data => { 
           
      
          return data as JSON},
      error =>{}
  ));
 }

 getSaleCustomer():Observable<object>{
    return this.httpClient.get(ROOT_URL+'bi/sale/customer')
    .pipe(
    map(
      data => { 
           
      
          return data},
      error =>{}
  ));
 }
}
